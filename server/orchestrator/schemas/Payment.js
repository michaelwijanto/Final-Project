const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type transactionToken {
    token: String
    error: [String]
  }

  type successPayment {
    status: Int
    detail: [String]
  }

  type Query {
    transactionToken(access_token: String): transactionToken
  }

  type Mutation {
    successPayment(access_token: String): successPayment
  }
`;
const resolvers = {
  Query: {
    transactionToken: async (_, args) => {
      try {
        const { access_token } = args;
        const { data } = await axios.get(
          "http://localhost:3000/api/payment/transaction-token",
          {
            headers: {
              access_token,
            },
          }
        );
        return data;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    successPayment: async (_, args) => {
      try {
        const { access_token } = args;
        console.log(access_token);
        const data = await axios.put(
          "http://localhost:3000/api/payment/success",
          {},
          {
            headers: {
              access_token,
            },
          }
        );
        return data;
      } catch (error) {
        return error.response.data;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
