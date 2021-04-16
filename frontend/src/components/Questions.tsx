import { PropsWithChildren } from 'react';

import styles from './Questions.module.scss';

export interface QuestionsProps {}

const Questions = ({}: PropsWithChildren<QuestionsProps>) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    console.log(event);
  };

  return (
    <section className={styles.container}>
      <div className={styles.questionBlock}>
        <h1 className={styles.question}>Question</h1>
      </div>
      <form className={styles.answerForm} onSubmit={(event) => handleSubmit(event)} method="POST">
        <input className={`${styles.answerField} ${styles.answerInput}`} autoComplete="off" name="answer" type="text" />
        <input className={`${styles.answerField} ${styles.answerSubmit}`} type="submit" value="Answer" />
      </form>
    </section>
  );
};

export default Questions;
