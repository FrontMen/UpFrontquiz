import * as React from "react";
import Countdown from "components/Countdown";
import { TPlayerProps } from '@types';
import useGameState from '../hooks/gameState';


import styles from '~/styles/player.module.scss'

export default function Player({ id }: TPlayerProps) {
    const gameState = useGameState()

    return (
        <section className={styles.wrapper}>
            <header>
                <h2>{gameState.getPlayerById(id).name}</h2>
            </header>
            <Countdown
                seconds={10}
                size={60}
                strokeBgColor="blue"
                strokeColor="rgba(255, 255, 255, .7)"
                strokeWidth={7}
                countdown={120}
                isPlaying={true}
            />
        </section>
    )
}
