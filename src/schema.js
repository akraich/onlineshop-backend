const { gql } = require("apollo-server");

const typeDefs = gql`
  type Item {
    id: ID!
    title: String!
    description: String!
    image: String
    largeImage: String
    price: Int!
  }

  type Query {
    items: [Item]!
  }

  type Mutation {
    createItem(
      title: String
      description: String
      image: String
      largeImage: String
      price: Int
    ): Item!
  }
`;
module.exports = typeDefs;
