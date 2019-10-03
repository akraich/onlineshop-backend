const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
  }

  type Query {
    hi: String
  }

  type Mutation {
    hi: String
  }
`;
module.exports = typeDefs;
