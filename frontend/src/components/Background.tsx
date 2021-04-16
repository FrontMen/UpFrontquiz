import styles from '~/styles/background.module.scss'

import useGameState from '../hooks/gameState'
import { useEffect } from 'react'

const BackgroundComponent = () => {
  const gameState = useGameState()

  useEffect(() => {
    // test
    const isActive = true
    gameState.setPlayer1((d) => ({ ...d, isActive, name: 'Player 1' }))
    gameState.setPlayer2((d) => ({ ...d, isActive: !isActive, name: 'Player 2' }))
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.playersContainer}>
        <div className={[styles.p1, ...(gameState.player1.isActive ? [styles[`p1--active`]] : [])].join(' ')} />
        <div className={[styles.p2, ...(gameState.player2.isActive ? [styles[`p2--active`]] : [])].join(' ')} />
      </div>
    </div>
  )
}

export default BackgroundComponent
