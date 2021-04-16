import Background from '../components/Background'
import AnswersList from 'components/AnswersList';
import Questions from 'components/Questions';
import Player from 'components/Player';

import styles from '~/styles/index.module.scss';
import useGameState from '~/hooks/gameState';
import Entry from 'components/Entry';

export default function Home() {
  const { isReady, ...gameStat } = useGameState()
  return (
    <>
      { isReady && <main className={styles.container}>
        <Background />
        <div className={styles.main}>
          <Player id={gameStat.player1?.id} />
          <AnswersList />
          <Player id={gameStat.player2?.id} />
        </div>
        <div className={styles.passBtnWrapper}>
          <button data-active-player={gameStat.activePlayerId}>Pass</button>
        </div>
        <section>
          <Questions />
        </section>
      </main> || <Entry />}
    </>
  );
}
