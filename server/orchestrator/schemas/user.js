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

  type AcessToken {
    access_token: String
  }

  type UserProfile {
    id: ID,
    UserId: ID,
    phoneNumber: String
    subscription: String
    gender: String
    dateBirth: String
    LevelId: String
    goals: String
    createdAt: String
    updatedAt: String
  }


  type Query {
    getUsers: [User]
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
    ): Message
  }
  `;
  
const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const usersCache = await redis.get("users");
        if (usersCache) {
          console.log("udah ada");
          return JSON.parse(usersCache);
        } else {
          console.log("blum ada");
          const { data: users } = await axios.get(
            "http://localhost:3000/users/"
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
        const {data: user} = await axios.post("http://localhost:3000/api/users/login", args);
        console.log({user});
        return { message: "Sign Up Succesful" };
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
