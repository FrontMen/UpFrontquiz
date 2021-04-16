import styles from '~/styles/answerslist.module.scss';

export default function AnswersList() {
  return (
    <ul className={styles.answerslist}>
      <li className={styles.answer}>answer 1</li>
      <li className={styles.answer}>answer 2</li>
      <li className={styles.answer}>answer 3</li>
      <li className={styles.answer}>answer 4</li>
      <li className={styles.answer}>answer 5</li>
    </ul>
  );
}
