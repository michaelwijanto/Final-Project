import { gql } from "@apollo/client";

export const REGISTER = gql`
mutation SignUpUser(
  $email: String,
  $password: String,
  $fullName: String
) {
  signUpUser(
    email: $email,
    password: $password,
    fullName: $fullName
  ) {
    message
  }
}
`;