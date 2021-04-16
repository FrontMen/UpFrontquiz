import styles from '~/styles/player.module.scss'
import * as React from "react";
import Countdown from "components/Countdown";


const COLOR_CODES = {
    remainingPathColor: "green"
}

type PlayerProps = {
    name: string
}

export default function Player({name}: PlayerProps) {
    const remainingPathColor = COLOR_CODES.remainingPathColor

    return (
        <section>
            <header>
                <h2>{name}</h2>
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
