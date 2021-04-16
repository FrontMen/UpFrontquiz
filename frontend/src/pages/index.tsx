import styles from '~/styles/index.module.scss';
import AnswersList from 'components/AnswersList';
import Questions from 'components/Questions';

export default function Home() {
  return (
    <main className={styles.container}>
      <section>
        <header>
          <h2>Team 1</h2>
        </header>
      </section>
      <AnswersList />
      <section>
        <header>
          <h2>Team 2</h2>
        </header>
      </section>
      <section>
        <button>Pass</button>
        <Questions />
      </section>
    </main>
  );
}
