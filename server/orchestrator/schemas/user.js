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
  type MacroValue {
    protein: Int
    fat: Int
    carbs: Int
  }

  type Macro {
    calorie: Int
    balanced: MacroValue
    lowfat: MacroValue
    lowcarbs: MacroValue
    highprotein: MacroValue
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
    postUser(
      email: String
      password: String
      fullName: String
    ): Message
    loginUser(
      email: String
      password: String
    ): User
    patchSubscriptionUser(
      userId: ID
      isRegister: String
    ): Message
    postMacro(
      age: Int
      gender: String
      height: Int
      weight: Int
      activitylevel: String
      goal: String
    ): Macro
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
            "http://localhost:3000/users"
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
    postUser: async (_, args) => {
      try {
        console.log(args, "<<<<<<");
        const user = await axios.post("http://localhost:3000/users", args);
        await redis.del("users");
        return { message: "Sign Up Succesful" };
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
    patchSubscriptionUser: async (_, args) => {
      try {
        const { isRegister, userId } = args;
        const user = axios.patch(`http://localhost:3000/users/${userId}`, {
          isRegister,
        });
        await redis.del("users");
        return {
          message:
            "Thank you for your subscription, your account is upgraded to Premium now.",
        };
      } catch (err) {
        console.log({ err });
        return err;
      }
    },
    postMacro: async (_, args) => {
      try {
        console.log({args});
        let {data} = await axios({
          method: "GET",
          url: "https://fitness-calculator.p.rapidapi.com/macrocalculator",
          params: args,
          headers: {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key":
              "8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca",
          },
        });
        const result = data.data
        for(const i in result){
          if(result[i].protein){
            for(const j in result[i]){
              result[i][j] = Math.floor(result[i][j])
            }
          } else result[i] = Math.floor(result[i])
        }
        return result
      } catch (err) {
        console.log({err});
        return err
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
