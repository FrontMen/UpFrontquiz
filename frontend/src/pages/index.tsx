import Background from '../components/Background'
import AnswersList from 'components/AnswersList';
import Questions from 'components/Questions';
import Player from 'components/Player';

import styles from '~/styles/index.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <Background />
      <div className={styles.main}>
        <Player name="player1" id={1} />
        <AnswersList />
        <Player name="player2" id={2} />
      </div>
      <section>
        <button>Pass</button>
        <Questions />
      </section>
    </main>
  );
}
