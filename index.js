const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const port = 5000;
const typeDefs = require('./GraphQl/Client/typeDefs');
const resolvers = require('./GraphQl/Client/resolvers');

//database connection
const SERVER_URI = `mongodb+srv://rakib:rakib9090@cluster0.zqlov.mongodb.net/SapineSystem?retryWrites=true&w=majority`;
mongoose
  .connect(SERVER_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error Connect", err));

//server connection

const Server = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    // typeDefs: './src/schema.graphql',
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(port, () => console.log(`Server started on port ${port}`));
};

Server()