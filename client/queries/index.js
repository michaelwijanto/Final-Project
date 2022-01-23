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

export const GET_COACH_DETAIL = gql`
  query GetCoachDetail($getCoachDetailId: ID) {
    getCoachDetail(id: $getCoachDetailId) {
      id
      name
      imgCoach
      age
      bio
    }
  }
`;
