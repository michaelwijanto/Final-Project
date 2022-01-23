const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type Level {
    id: ID
    name: String
  }
  type UserProfile {
    id: ID
    UserId: ID
    phoneNumber: String
    subscription: String
    gender: String
    dateBirth: String
    LevelId: String
    goals: String
    createdAt: String
    updatedAt: String
    Level: Level
    User: User
  }

  type Log {
    id: ID
    height: String
    weight: String
    activityLevel: String
    LevelId: ID
    UserId: ID
    createdAt: String
  }

  type ResponUserProfile {
    UserProfile: UserProfile
    Log: Log
  }

  type Query {
    getUserProfile(
      access_token: String
    ): ResponUserProfile
    
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
        const { access_token } = args;
        const { data: user } = await axios.get(
          "http://localhost:3000/api/user-profiles",
          { headers: { access_token } }
        );
        console.log(user);
        return user;
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
  Mutation: {
    postUserProfile: async (_, args) => {
      try {
        const { access_token } = args;
        const { data } = await axios.post(
          "http://localhost:3000/api/user-profiles",
          args,
          { headers: { access_token } }
        );
        console.log(data);
        return data;
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
