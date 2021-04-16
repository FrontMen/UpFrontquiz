import * as React from 'react';
import Countdown from 'components/Countdown';
import styles from '~/styles/player.module.scss';

interface PlayerProps {
  data: {
    id: string;
    name: string;
    timeLeft: number;
  };
}
export const Player: React.FC<PlayerProps> = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      {data?.id ? (
        <>
          <header>
            <h2>{data.name}</h2>
          </header>
          <Countdown
            seconds={300}
            size={60}
            strokeBgColor="transparent"
            strokeColor="rgba(255, 255, 255, .7)"
            strokeWidth={8}
            countdown={data.timeLeft}
            isPlaying={true}
          />
        </>
      ) : (
        <>Pending for user</>
      )}
    </section>
  );
};
