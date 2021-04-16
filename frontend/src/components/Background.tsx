import styles from '~/styles/background.module.scss';

interface BackgroundProps {
  active: 1 | 2 | null;
}

export const Background: React.FC<BackgroundProps> = ({ active }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.playersContainer}>
        <div className={[styles.p1, ...(active === 1 ? [styles[`p1--active`]] : [])].join(' ')} />
        <div className={[styles.p2, ...(active === 2 ? [styles[`p2--active`]] : [])].join(' ')} />
      </div>
    </div>
  );
};
