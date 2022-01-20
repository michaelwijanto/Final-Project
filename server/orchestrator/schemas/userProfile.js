const { gql } = require("apollo-server");
const redis = require("../redis");
const axios = require("axios");

const typeDefs = gql`

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
    getUserProfile(
      access_token: String
    ): UserProfile
  }

  type Mutation {
    postUserProfile(
      access_token: String
      height: Int
      weight: Int
      activityLevel: Int
      phoneNumber: String
      gender: String
      dateBirth: String,
      goals: String
    ): Message
  }
`;
const resolvers = {
  Query: {
    getUserProfile: async (_, args) => {
      try {
        const {data: user} = await axios.post("http://localhost:3000/api/user-profiles", {headers: {access_token: args.access_token}});
        console.log(user);
        return user
      } catch (err) {
        console.log({err});
        return err
      }
    }
  },
  Mutation: {
    postUserProfile: async (_, args) => {
      try {
        args.subscription = "false"
        args.UserId = 1
        const {data} = await axios.post("http://localhost:3000/api/user-profiles", args);
        console.log(data);
        return {message: "tes"}
      } catch (err) {
        console.log({err});
        return err
      }
    }
  },
};

module.exports = { typeDefs, resolvers };
