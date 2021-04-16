import { useState } from "react"

import { TPlayerGameState } from '@types'

export const useGameState = () => {
  const [player1, setPlayer1] = useState<TPlayerGameState>({
    // @TODO: bind to data
    name: 'Team 1',
    isActive: false
  })
  const [player2, setPlayer2] = useState<TPlayerGameState>({
    // @TODO: bind to data
    name: 'Team 2',
    isActive: false
  })
  const getPlayerById = (id: number): TPlayerGameState => {
    return id === 1 ? player1 : player2
  }

  return {
    player1,
    player2,
    setPlayer1,
    setPlayer2,
    getPlayerById,
  }
}

export default useGameState
