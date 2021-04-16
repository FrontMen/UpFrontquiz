import styles from '~/styles/index.module.scss';
import Questions from 'components/Questions';

export default function Home() {
  return (
    <main className={styles.container}>
      <section>
        <header>
          <h2>Team 1</h2>
        </header>
      </section>
      <section>
        <header>
          <h2>Answers</h2>
        </header>
      </section>
      <section>
        <header>
          <h2>Team 2</h2>
        </header>
      </section>
      <section>
        <button>Pass</button>
        <Questions submitButtonText="Answer" />
      </section>
    </main>
  );
}
