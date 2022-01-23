import { gql } from "@apollo/client";

export const REGISTER = gql`
mutation SignUpUser(
  $fullName: String,
  $email: String,
  $password: String
) {
  signUpUser(
    fullName: $fullName,
    email: $email,
    password: $password
  ) {
    message
  }
}
`;

export const POST_MACRO = gql`
mutation PostMacro($age: Int, $gender: String, $height: Int, $weight: Int, $activitylevel: Int, $goal: String) {
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