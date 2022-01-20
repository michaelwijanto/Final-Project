const { gql } = require("apollo-server");
const redis = require("../redis");
const axios = require("axios");

const typeDefs = gql`
  type Content {
    youtubeUrl: String
    description: String
    LevelId: ID
    likes: Int
    statusLike: String
    title: String
  }

  type Query {
    getContents(
      access_token: String
    ): [Content]
    getContentById(
      access_token: String
      ContentId: ID
    ): 
  }

  type Mutation {
    postContent(
      access_token: String
      youtubeUrl: String
      description: String
      title: String
      LevelId: ID
    ): Content
    updateContent(
      access_token: String
      ContentId: ID
      youtubeUrl: String
      description: String
      title: String
      LevelId: ID
      likes: Int
    ): Content
    deleteContents(
      access_token: String
      ContentId: ID
    ): Message
    patchLikeContent(
      access_token: String
      statusLike: String
    )
  }
`

const resolvers = {
  Query: {
    getContents: async(_, args) => {
      try {
        const {access_token} = args
        const contentsCache = await redis.get("contents")
        if(!contentsCache){
          return JSON.parse(contentsCache)
        } else {
          const {data: contents} = await axios.get("http://localhost:3000/api/contents", {headers: {access_token}})
          console.log(contents);
          await redis.set("contents", JSON.stringify(contents))
          return contents
        }
      } catch (err) {
        console.log({err});
        return err
      }
    },
    getContentById: async(_, args) => {
      try {
        const {access_token, ContentId} = args
        const contentCache = await redis.get("content")
        if(contentCache && JSON.parse(contentCache).id == ContentId){
          console.log(JSON.parse(contentCache));
          return JSON.parse(contentCache)
        } else {
          const {data: content} = await axios.get(`http://localhost:3000/api/contents/${ContentId}`, {headers: {access_token}})
          console.log(content);
          await redis.set("contents", JSON.stringify(content))
          return content
        }
      } catch (err) {
        console.log({err});
        return err
      }
    }
  }
}

module.exports = {typeDefs, resolvers}