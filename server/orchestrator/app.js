const { gql } = require("apollo-server");
const UserController = require("../controllers/user");
const errorHandler = require("../helpers/errorHandler");

const typeDefs = gql`
  type User {
    id: ID
    email: String
    password: String
    fullName: String
    isRegister: String
    role: String
    createdAt: String
    updatedAt: String
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
    getUser(userId: ID): User
  }

  type Mutation {
    postUser(
      email: String
      password: String
      fullName: String
    ): User
    loginUser(
      email: String
      password: String
    ): User
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = UserController.getUsers()
        return users
      } catch (err) {
        return err
      }
    }
  },
  Mutation: {
    postUser: async (_, args) => {
      try {
        const user = await UserController.postUser(args)
        // console.log({user});
        if(user.errors) throw user
        console.log("BENARRR");
        return user
      } catch (err) {
        console.log("ke sini");
        return errorHandler(err)
      }
    }
  }
}

module.exports = {typeDefs, resolvers}
