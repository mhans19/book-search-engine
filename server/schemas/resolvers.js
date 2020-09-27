// DEPENDENCIES
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User } = require("../models");
// MUTATIONS
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // user is being used from context
      if(context.user) {
        //get user data into a variable removes password
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
      return userData;
      }
      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    // Add User
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // Login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // If user does not exist
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // Determine if password is correct
      const correctPw = await user.isCorrectPassword(password);
      // Incorrect credentials (password or username)
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    // Save Book
    saveBook: async (parent, { input }, context) => {
      // User must be logged in
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    // Remove Book
    removeBook: async (parent, args, context) => {
      // User must be logged in
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: args.bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!')
    } 
  }
};
// EXPORTS
module.exports = resolvers;