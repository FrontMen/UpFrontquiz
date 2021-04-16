import { TPlayerProps } from '@types'
import useGameState from '../hooks/gameState'

import styles from '~/styles/player.module.scss'

export const Player = ({ id }: TPlayerProps) => {
  const gameState = useGameState()

  return (
    <section className={styles.wrapper}>
      <header>
        <h2>{gameState.getPlayerById(id).name}</h2>
      </header>
    </section>
  )
}

export default Player
