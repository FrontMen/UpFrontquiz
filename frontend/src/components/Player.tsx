import * as React from "react";
import Countdown from "components/Countdown";
import { TPlayerProps } from '@types';
import useGameState from '../hooks/gameState';


import styles from '~/styles/player.module.scss'

export default function Player({ id, timeLeft }: TPlayerProps) {
    const gameState = useGameState()

    return (
        <section className={styles.wrapper}>
            {
                id ? (
                    <>
                        <header>
                            <h2>{gameState?.getPlayerById(id)?.name}</h2>
                        </header>
                        <Countdown
                            seconds={300}
                            size={60}
                            strokeBgColor="transparent"
                            strokeColor="rgba(255, 255, 255, .7)"
                            strokeWidth={8}
                            countdown={timeLeft}
                            isPlaying={true}
                        />
                    </>
                ) : <>Pending for user</>

            }
        </section>
    )
}
