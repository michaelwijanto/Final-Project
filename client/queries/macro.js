 
import { gql } from "@apollo/client";

export const POST_MACRO = gql`
mutation PostMacro($age: Int, $gender: String, $height: Int, $weight: Int, $activitylevel: String, $goal: String) {
  postMacro(age: $age, gender: $gender, height: $height, weight: $weight, activitylevel: $activitylevel, goal: $goal) {
    calorie
    balanced {
      protein
      fat
      carbs
    }
    lowfat {
      protein
      fat
      carbs
    }
    lowcarbs {
      protein
      fat
      carbs
    }
    highprotein {
      protein
      fat
      carbs
    }
  }
}
`;