import { Background } from '../components/Background';
import AnswersList from 'components/AnswersList';
import { Questions } from 'components/Questions';
import { Player } from 'components/Player';

import styles from '~/styles/index.module.scss';
import useGameState from '~/hooks/gameState';
import Entry from 'components/Entry';

export default function Home() {
  const { activePlayerId, setActivePlayerId, quiz, player1, player2 } = useGameState();

  if (activePlayerId && quiz) {
    return (
      <main className={styles.container}>
        <Background active={player1?.active ? 1 : player2?.active ? 2 : null} />
        <div className={styles.main}>
          <Player data={player1} />
          <AnswersList />
          <Player data={player2} />
        </div>
        <div className={styles.passBtnWrapper}>
          <button data-active-player={activePlayerId}>Pass</button>
        </div>
        <section>
          {quiz.active && player1.active && (
            <Questions userId={activePlayerId} question={quiz.questions[quiz.currentQuestion]?.question} />
          )}
        </section>
      </main>
    );
  } else {
    return <Entry setActivePlayerId={setActivePlayerId} />;
  }
}
