import { gql } from '@apollo/client';

export const testTimer = gql`
  subscription testTimer {
    timer
  }
`;

export const getUsers = gql`
  subscription getUsers {
    users {
      id
      name
    }
  }
`;
