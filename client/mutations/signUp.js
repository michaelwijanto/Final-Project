import { gql } from "@apollo/client";

export const REGISTER = gql`
mutation SignUpUser(
  $newUser: RegisterUser!
) {
  signUpUser(
    newUser: $newUser
  ) {
    message
  }
}
`;