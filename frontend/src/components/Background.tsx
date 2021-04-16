import styles from '~/styles/background.module.scss'

import useGameState from '../hooks/gameState'
import { useEffect } from 'react'

const BackgroundComponent = () => {
  const gameState = useGameState()

  return (
    <div className={styles.wrapper}>
      <div className={styles.playersContainer}>
        <div className={[styles.p1, ...(gameState.activePlayerId === gameState?.player1?.id ? [styles[`p1--active`]] : [])].join(' ')} />
        <div className={[styles.p2, ...(gameState.activePlayerId === gameState?.player2?.id ? [styles[`p2--active`]] : [])].join(' ')} />
      </div>
    </div>
  )
}

export default BackgroundComponent
