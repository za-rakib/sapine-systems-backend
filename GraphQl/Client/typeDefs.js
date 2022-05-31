const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Client {
    id: ID
    name: String
    number: String
    email: String!
    status: String
    source: String
    createdAt: String
    updatedAt: String
  }
  type Query {
    getAllClient: [Client]
  }

  input ClientInput {
    name: String
    number: String
    email: String
    status: String
    source: String
  }

  type Mutation {
    addClient(client: ClientInput): Client
    updateClient(id: String, client: ClientInput): Client
    deleteClient(id: String): String
  }
`;
module.exports = typeDefs;
