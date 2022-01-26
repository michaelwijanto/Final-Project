const { gql } = require("apollo-server");
const redis = require("../redis");
const axios = require("axios");
const { get } = require("../redis");

const typeDefs = gql`
  type User {
    id: ID
    email: String
    fullName: String
    isRegister: String
    role: String
    isActivated: String
  }

  type Coach {
    id: ID
    name: String
    imgCoach: String
    age: String
    bio: String
  }

  type Level {
    id: ID
    name: String
    thumbnail: String
    description: String
  }

  type Message {
    message: String
    error: [String]
  }

  type AccessToken {
    access_token: String
    isRegister: String
    subscription: String
    error: String
  }

  type Query {
    getUsers(access_token: String): [User]
    getCoaches: [Coach]
    getCoachDetail(id: ID): Coach
    getLevels: [Level]
  }

  type Mutation {
    signUpUser(email: String, password: String, fullName: String): Message
    signInUser(email: String, password: String): AccessToken
    activateUser(pin: String): Message
  }
`;

const resolvers = {
  Query: {
    getCoaches: async () => {
      try {
        const { data: coaches } = await axios.get(
          "http://localhost:3000/api/users/coach"
        );
        return coaches;
      } catch (err) {
        return err;
      }
    },

    getCoachDetail: async (_, args) => {
      try {
        const { id } = args;
        const { data: coach } = await axios.get(
          `http://localhost:3000/api/users/coach/${id}`
        );
        return coach;
      } catch (err) {
        return err;
      }
    },

    getUsers: async (_, args) => {
      try {
        await redis.del("users");
        const usersCache = await redis.get("users");
        if (usersCache) {
          console.log("udah ada");
          return JSON.parse(usersCache);
        } else {
          console.log("blum ada");
          const { data: users } = await axios.get(
            "http://localhost:3000/api/users/",
            {
              headers: { access_token: args.access_token },
            }
          );
          await redis.set("users", JSON.stringify(users));
          return users;
        }
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
    getLevels: async (_, args) => {
      try {
        const { data: levels } = await axios.get(
          "http://localhost:3000/api/users/level"
        );
        return levels;
      } catch (err) {
        return err;
      }
    },
  },
  Mutation: {
    signUpUser: async (_, args) => {
      try {
        console.log({ args });
        const { data: user } = await axios.post(
          "http://localhost:3000/api/users/register",
          args
        );
        console.log({ user });
        await redis.del("users");
        return { message: "Sign Up Succesful" };
      } catch (err) {
        return err.response.data;
      }
    },
    signInUser: async (_, args) => {
      try {
        console.log(args, "<<<<<< args value");
        const { data } = await axios.post(
          "http://localhost:3000/api/users/login",
          args
        );
        console.log(data);
        return data;
      } catch (err) {
        console.log(err.response.data);
        return err.response.data;
      }
    },
    activateUser: async (_, args) => {
      try {
        const { data } = await axios.patch(
          "http://localhost:3000/api/users/",
          args
        );
        console.log(data);
        return data;
      } catch (err) {
        err.response.data;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
