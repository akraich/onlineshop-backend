const dotenv = require("dotenv");
dotenv.config({ path: "variables.env" });

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const prisma = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ ...req, prisma })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
