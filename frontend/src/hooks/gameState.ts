import { useState } from "react"

import { TPlayerGameState } from '@types'

export const useGameState = () => {
  const [player1, setPlayer1] = useState<TPlayerGameState>({
    name: null,
    isActive: false
  })
  const [player2, setPlayer2] = useState<TPlayerGameState>({
    name: null,
    isActive: false
  })

  return {
    player1,
    player2,
    setPlayer1,
    setPlayer2,
  }
}

export default useGameState
