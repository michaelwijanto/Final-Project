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
    imgThumbnail: String
  }

  type Level {
    id: ID
    name: String
    thumbnail: String
  }

  type Query {
    getContents(access_token: String): [Content]
    getContentById(access_token: String, ContentId: ID): Content
    getLevel: [Level]
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
    postContent(
      access_token: String
      youtubeUrl: String
      description: String
      LevelId: ID
      likes: Int
      statusLike: String
      title: String
      imgThumbnail: String
    ): Content
    putContent(
      access_token: String
      id: ID
      youtubeUrl: String
      description: String
      LevelId: ID
      likes: Int
      statusLike: String
      title: String
      imgThumbnail: String
    ): Content
    deleteContent(id: ID, access_token: String): Message
  }
`;
const resolvers = {
  Query: {
    getLevel: async () => {
      try {
        const { data: levels } = await axios.get(
          "http://localhost:3000/api/users/level"
        );
        return levels;
      } catch (err) {
        return err;
      }
    },

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
          await redis.set("contents", JSON.stringify(contents));
          return contents;
        }
      } catch (err) {
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
            {
              headers: { access_token },
            }
          );
          await redis.set("contents", JSON.stringify(content));
          return content;
        }
      } catch (err) {
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
          { statusLike },
          { headers: { access_token } }
        );
        await redis.del("contents");
        return {
          message: `Content like status has been updated to ${data.statusLike}`,
        };
      } catch (err) {
        return err;
      }
    },
    postContent: async (_, args) => {
      try {
        const { data: newContent } = await axios.post(
          "http://localhost:3000/api/contents/",
          { args },
          { headers: args.access_token }
        );
        await redis.del("contents");
        return newContent;
      } catch (err) {
        return err;
      }
    },
    putContent: async (_, args) => {
      try {
        const { data: updateContent } = await axios.put(
          `http://localhost:3000/api/contents/${args.id}`,
          args,
          {
            headers: args.access_token,
          }
        );
        await redis.del("contents");
        return updateContent;
      } catch (err) {
        return err;
      }
    },
    deleteContent: async (_, args) => {
      try {
        const { id, access_token } = args;
        const result = await axios.delete(
          `http://localhost:3000/api/contents/${id}`,
          null,
          { headers: { access_token } }
        );
        await redis.del("contents");
        return result;
      } catch (err) {
        return err;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
