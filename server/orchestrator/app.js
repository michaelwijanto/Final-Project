require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const {
  typeDefs: userTypeDefs,
  resolvers: userResolvers,
} = require("./schemas/user");
const {
  typeDefs: macroTypeDefs,
  resolvers: macroResolvers,
} = require("./schemas/macro");
const {
  typeDefs: userProfileTypeDefs,
  resolvers: userProfileResolvers,
} = require("./schemas/userProfile");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, macroTypeDefs, userProfileTypeDefs],
  resolvers: [userResolvers, macroResolvers, userProfileResolvers],
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
