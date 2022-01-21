const { gql } = require("apollo-server");
const redis = require("../redis");
const axios = require("axios");

const typeDefs = gql`
  type User {
    id: ID
    email: String
    fullName: String
    isRegister: String
    role: String
  }

  type Message {
    message: String
  }

  type AccessToken {
    access_token: String
  }


  type Query {
    getUsers(
      access_token: String
    ): [User]
  }


  type Mutation {
    signUpUser(
      email: String
      password: String
      fullName: String
    ): Message
    signInUser(
      email: String
      password: String
    ): AccessToken
  }
  `;
  
const resolvers = {
  Query: {
    getUsers: async (_, args) => {
      try {
        await redis.del("users")
        const usersCache = await redis.get("users");
        if (usersCache) {
          console.log("udah ada");
          return JSON.parse(usersCache);
        } else {
          console.log("blum ada");
          const { data: users } = await axios.get(
            "http://localhost:3000/api/users/",
            {headers: {access_token: args.access_token}}
          );
          await redis.set("users", JSON.stringify(users));
          return users;
        }
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
  Mutation: {
    signUpUser: async (_, args) => {
      try {
        console.log(args, "<<<<<<");
        const {data: user} = await axios.post("http://localhost:3000/api/users/register", args);
        console.log({user});
        await redis.del("users");
        return { message: "Sign Up Succesful" };
      } catch (err) {
        console.log(err.response.data);
        return err;
      }
    },
    signInUser: async (_, args) => {
      try {
        const {data} = await axios.post("http://localhost:3000/api/users/login", args);
        console.log(data);
        return data
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
