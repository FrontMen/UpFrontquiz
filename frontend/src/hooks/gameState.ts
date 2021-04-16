import { useGetUsersSubscription } from '../graphql';
import { useEffect, useState } from 'react';

import { TPlayerGameState } from '@types';

export const useGameState = () => {
  const { loading: isLoading, data } = useGetUsersSubscription();

  const [player1, setPlayer1] = useState<TPlayerGameState>(null)
  const [player2, setPlayer2] = useState<TPlayerGameState>(null)
  const [users, setUsers] = useState<null | TPlayerGameState[]>(null)
  const [activePlayerId, setActivePlayerId] = useState(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (users?.length === 2) {
      const [player1, player2] = users;
      setPlayer1(player1);
      setPlayer2(player2);

      if (!activePlayerId) {
        setActivePlayerId(player1.id);
      }
    } else if (users?.length) {
      // PENDING FOR SECOND PLAYER
    }
  }, [users]);

  useEffect(() => {
    if (activePlayerId) {
      setIsReady(true)
    }
  }, [activePlayerId])

  const getPlayerById = (playerId: string): TPlayerGameState => users?.find(({ id }) => id === playerId);

  return {
    isLoading,
    player1,
    player2,
    getPlayerById,
    activePlayerId,
    isReady,
    setUsers,
  }
}

export default useGameState;
