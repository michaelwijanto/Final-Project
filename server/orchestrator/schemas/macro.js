const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
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

  type ResponseMacro {
    success: Macro
    errorr: [String]
  }

  type Mutation {
    postMacro(
      age: Int
      gender: String
      height: Int
      weight: Int
      activitylevel: Int
      goal: String
    ): Macro
  }
`;
const resolvers = {
  Mutation: {
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
