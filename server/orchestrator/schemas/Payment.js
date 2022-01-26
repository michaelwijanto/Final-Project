const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type transactionToken {
    token: String
    error: [String]
  }

  type Query {
    transactionToken(access_token: String): transactionToken
  }
`
const resolvers = {
  Query: {
    transactionToken: async (_, args) => {
      try {
        const { access_token } = args
        
        const { data } = await axios.get('http://localhost:3000/api/payment/transaction-token', {
          headers: {
            access_token
          }
        })
        console.log(data);
        return data
      } catch (error) {
        return error
      }
    }
  }
}

module.exports = { typeDefs, resolvers }