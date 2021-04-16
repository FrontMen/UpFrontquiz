import { useGetUsersSubscription, useGetQuizSubscription } from '../graphql';
import { createState, useState as useGlobalState } from '@hookstate/core';

const activePlayerIdState = createState<string | null>(null);

export const useGameState = () => {
  const activePlayerId = useGlobalState(activePlayerIdState);
  const { data: usersData, error: usersError } = useGetUsersSubscription({
    skip: !activePlayerId.value,
    variables: { userId: activePlayerId.value },
  });
  const { data: quizData, error: quizError } = useGetQuizSubscription({
    skip: !activePlayerId.value,
  });

  if (usersError || quizError) {
    console.log({ usersError, quizError });
  }

  const state = {
    activePlayerId: activePlayerId.value,
    setActivePlayerId: activePlayerId.set,
    quiz: quizData?.quiz,
    player1: usersData?.users?.player1,
    player2: usersData?.users?.player2,
  };
  console.log(state);
  return state;
};

export default useGameState;
