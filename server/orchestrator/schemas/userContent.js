const { gql } = require("apollo-server");
const axios = require("axios");
const redis = require("../redis");

const typeDefs = gql`
  type UserContent {
    id: ID
    UserId: ID
    ContentId: ID
    isLike: String
    status: String
  }

  type Query {
    getUserContents(access_token: String): [UserContent]
    getUserContentById(access_token: String, ContentId: ID): UserContent
  }

  type Mutation {
    postUserContent(access_token: String, ContentId: ID): UserContent
    putUserContent(access_token: String, ContentId: ID): Message
    patchLike(access_token: String, ContentId: ID): Message
  }
`;
const resolvers = {
  Query: {
    getUserContents: async (_, args) => {
      try {
        const { access_token } = args;
        const userContentsCache = await redis.get("userContents");
        if (userContentsCache) {
          return JSON.parse(userContentsCache);
        } else {
          const { data: userContents } = await axios.get(
            "http://localhost:3000/api/user-contents",
            { headers: { access_token } }
          );
          console.log(userContents);
          await redis.set("userContents", JSON.stringify(userContents));
          return userContents;
        }
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
    getUserContentById: async (_, args) => {
      try {
        const { access_token, ContentId } = args;
        // const userContentCache = await redis.get("userContent");
        // if (userContentCache) {
        //   return JSON.parse(userContentCache);
        // } else {
        //   const { data: userContent } = await axios.get(
        //     `http://localhost:3000/api/user-contents/${ContentId}`,
        //     { headers: { access_token } }
        //   );
        //   console.log(userContent);
        //   await redis.set("userContent", JSON.stringify(userContent));
        //   return userContent;
        // }
        const { data: userContent } = await axios.get(
          `http://localhost:3000/api/user-contents/${ContentId}`,
          { headers: { access_token } }
        );
        return userContent;
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
  Mutation: {
    postUserContent: async (_, args) => {
      try {
        const { access_token, ContentId } = args;
        const { data } = await axios.post(
          `http://localhost:3000/api/user-contents/`,
          { ContentId },
          { headers: { access_token } }
        );
        await redis.del("userContents");
        await redis.del("userContent");
        console.log(data);
        // return { message: "Successful create UserContent" };
        return data;
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
    putUserContent: async (_, args) => {
      try {
        const { access_token, ContentId } = args;
        const { data } = await axios.put(
          `http://localhost:3000/api/user-contents/${ContentId}`,
          null,
          { headers: { access_token } }
        );
        await redis.del("userContents");
        await redis.del("userContent");
        console.log(data);
        return data;
      } catch (err) {
        console.log({ err });
        return err;
      }
    },

    patchLike: async (_, args) => {
      try {
        const { access_token, ContentId } = args;
        const { data } = await axios.patch(
          `http://localhost:3000/api/user-contents/${ContentId}`,
          null,
          { headers: { access_token } }
        );
        return { message: "Liked this excercise!" };
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
