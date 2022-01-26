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
const {
  typeDefs: contentTypeDefs,
  resolvers: contentResolvers,
} = require("./schemas/content");
const {
  typeDefs: userContentTypeDefs,
  resolvers: userContentResolvers,
} = require("./schemas/userContent");
const {
  typeDefs: paymentTypeDefs,
  resolvers: paymentResolvers,
} = require("./schemas/Payment");

const server = new ApolloServer({
  typeDefs: [
    userTypeDefs,
    macroTypeDefs,
    userProfileTypeDefs,
    contentTypeDefs,
    userContentTypeDefs,
    paymentTypeDefs,
  ],
  resolvers: [
    userResolvers,
    macroResolvers,
    userProfileResolvers,
    contentResolvers,
    userContentResolvers,
    paymentResolvers,
  ],
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
