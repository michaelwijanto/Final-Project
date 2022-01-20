const { gql } = require("apollo-server");
const axios = require("axios");
const redis = require("../redis");

const typeDefs = gql`
  type Content {
    id: ID
    youtubeUrl: String
    description: String
    LevelId: ID
    likes: Int
    statusLike: String
    title: String
    thumbnail: String
  }

  type Query {
    getContents(access_token: String): [Content]
    getContentById(access_token: String, ContentId: ID): Content
  }

  type MacroValue {
    protein: Int
    fat: Int
    carbs: Int
  }

  type Mutation {
    patchLikeContent(
      access_token: String
      statusLike: String
      ContentId: ID
    ): Message
  }
`;
const resolvers = {
  Query: {
    getContents: async (_, args) => {
      try {
        const { access_token } = args;
        await redis.del("contents");
        const contentsCache = await redis.get("contents");
        if (contentsCache) {
          return JSON.parse(contentsCache);
        } else {
          const { data: contents } = await axios.get(
            "http://localhost:3000/api/contents",
            { headers: { access_token } }
          );
          console.log(contents);
          await redis.set("contents", JSON.stringify(contents));
          return contents;
        }
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
    getContentById: async (_, args) => {
      try {
        const { access_token, ContentId } = args;
        const contentCache = await redis.get("content");
        if (contentCache && JSON.parse(contentCache).id == ContentId) {
          console.log(JSON.parse(contentCache));
          return JSON.parse(contentCache);
        } else {
          const { data: content } = await axios.get(
            `http://localhost:3000/api/contents/${ContentId}`,
            { headers: { access_token } }
          );
          console.log(content);
          await redis.set("contents", JSON.stringify(content));
          return content;
        }
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
  Mutation: {
    patchLikeContent: async (_, args) => {
      try {
        const { access_token, ContentId, statusLike } = args;
        const { data } = await axios.patch(
          `http://localhost:3000/api/contents/${ContentId}`,
          {statusLike},
          { headers: { access_token } }
        );
        await redis.del("contents");
        console.log(data);
        return {message: `Content like status has been updated to ${data.statusLike}`};
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
