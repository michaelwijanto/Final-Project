import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation SignUpUser($email: String, $password: String, $fullName: String) {
    signUpUser(email: $email, password: $password, fullName: $fullName) {
      message
      error
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignInUser($email: String, $password: String) {
    signInUser(email: $email, password: $password) {
      access_token
      isRegister
      error
    }
  }
`;

export const POST_MACRO = gql`
  mutation PostMacro(
    $age: Int
    $gender: String
    $height: Int
    $weight: Int
    $activitylevel: Int
    $goal: String
  ) {
    postMacro(
      age: $age
      gender: $gender
      height: $height
      weight: $weight
      activitylevel: $activitylevel
      goal: $goal
    ) {
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

export const POST_USER_LOG = gql`
  mutation PostUserLog($accessToken: String, $height: Int, $weight: Int) {
    postUserLog(access_token: $accessToken, height: $height, weight: $weight) {
      message
      error
    }
  }
`;

export const POST_USER_PROFILE = gql`
  mutation PostUserProfile(
    $accessToken: String
    $height: Int
    $weight: Int
    $activityLevel: Int
    $phoneNumber: String
    $gender: String
    $dateBirth: String
    $goals: String
  ) {
    postUserProfile(
      access_token: $accessToken
      height: $height
      weight: $weight
      activityLevel: $activityLevel
      phoneNumber: $phoneNumber
      gender: $gender
      dateBirth: $dateBirth
      goals: $goals
    ) {
      message
      error
    }
  }
`;

export const ACTIVATE = gql`
  mutation ActivateUser($pin: String) {
    activateUser(pin: $pin) {
      message
      error
    }
  }
`;

export const POST_USER_CONTENT = gql`
  mutation PostUserContent($accessToken: String, $contentId: ID) {
    postUserContent(access_token: $accessToken, ContentId: $contentId) {
      ContentId
      isLike
      status
      UserId
    }
  }
`;

export const UPDATE_STATUS_USER_CONTENT = gql`
  mutation PutUserContent($accessToken: String, $contentId: ID) {
    putUserContent(access_token: $accessToken, ContentId: $contentId) {
      message
    }
  }
`;

export const PATCH_LIKE = gql`
  mutation PatchLike($accessToken: String, $contentId: ID) {
    patchLike(access_token: $accessToken, ContentId: $contentId) {
      message
    }
  }
`;

export const SUCCESS_PAYMENT = gql`
  mutation SuccessPayment($accessToken: String) {
    successPayment(access_token: $accessToken) {
      status
    }
  }
`;