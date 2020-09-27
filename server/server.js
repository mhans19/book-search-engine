// DEPENDENCIES
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
// APOLLO SERVER
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
// APOLLO MIDDLEWARE
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});
server.applyMiddleware({ app });
// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// IF IN PROD: Serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// PATH *
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// OPEN PORT
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now listening on localhost:${PORT}`);
    console.log(`Use gql at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
