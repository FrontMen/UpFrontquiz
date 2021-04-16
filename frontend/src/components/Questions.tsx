import styles from '~/styles/questions.module.scss';
import { useAnswerQuestionMutation } from '../graphql';
export interface QuestionsProps {
  question: string;
  userId: string;
}

export const Questions: React.FC<QuestionsProps> = ({ question, userId }) => {
  const [answerQuestionMutation] = useAnswerQuestionMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    answerQuestionMutation({
      variables: { userId },
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.questionBlock}>
        <h1 className={styles.question}>{question}</h1>
      </div>
      <form className={styles.answerForm} onSubmit={(event) => handleSubmit(event)} method="POST">
        <input className={`${styles.answerField} ${styles.answerInput}`} autoComplete="off" name="answer" type="text" />
        <input className={`${styles.answerField} ${styles.answerSubmit}`} type="submit" value="Answer" />
      </form>
    </section>
  );
};
