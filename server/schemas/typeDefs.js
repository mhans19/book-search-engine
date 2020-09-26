// DEPENDENCIES
const { gql } = require("apollo-server-express");
// QUERIES
const typeDefs = gql`
    type Query {
        me: User
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    input bookDetails {
        author: String
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookDetails): User
        removeBook(bookId: String!): User
    }
    type Auth {
        token: ID
        user: User
    }
`;
// EXPORTS
module.exports = typeDefs;