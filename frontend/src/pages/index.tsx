import styles from '~/styles/index.module.scss'
import Background from '../components/Background'
import AnswersList from 'components/AnswersList';
import Questions from 'components/Questions';
import Player from "components/Player";

export default function Home() {
  return (
    <main className={styles.container}>
        <Background />
        <Player name="player1" />
        <AnswersList/>
        <Player name="player2" />
        <section >
            <button>Pass</button>
            <Questions />
        </section>
    </main>
  );
}
