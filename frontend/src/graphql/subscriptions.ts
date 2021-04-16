import { gql } from '@apollo/client';

export const testTimer = gql`
  subscription testTimer {
    timer
  }
`;

export const getUsers = gql`
  subscription getUsers($userId: String!) {
    users(userId: $userId) {
      player1 {
        id
        name
        timeLeft
        active
      }
      player2 {
        id
        name
        timeLeft
        active
      }
    }
  }
`;

export const getQuiz = gql`
  subscription getQuiz {
    quiz {
      id
      active
      currentQuestion
      questions {
        question
      }
    }
  }
`;
