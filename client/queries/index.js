import { gql } from "@apollo/client";

export const GET_COACHES = gql`
  query GetCoaches {
    getCoaches {
      id
      name
      imgCoach
      age
      bio
    }
  }
`;
