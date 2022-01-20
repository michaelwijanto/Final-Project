const { gql } = require("apollo-server");
const redis = require("../redis");
const axios = require("axios");

const typeDefs = gql`
  type Message {
    message: String
  }

  type Mutation {
    patchSubscription(
      userId: ID
      isRegister: String
    ): Message
  }
`
const resolvers = {
  Mutation: {
    patchSubscription: async (_, args) => {
      try {
        // const { isRegister, userId } = args;
        // const user = axios.patch(`http://localhost:3000/users/${userId}`, {
        //   isRegister,
        // });
        // await redis.del("users");
        return {
          message:
            "Thank you for your subscription, your account is upgraded to Premium now.",
        };
      } catch (err) {
        console.log({ err });
        return err;
      }
    }
  }
}

module.exports = {typeDefs, resolvers}