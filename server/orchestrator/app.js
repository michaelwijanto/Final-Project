require("dotenv").config()
const {ApolloServer} = require("apollo-server")
const {typeDefs: userTypeDefs, resolvers: userResolvers} = require("./schemas/user")

const server = new ApolloServer({ typeDefs: [userTypeDefs], resolvers: [userResolvers] });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
