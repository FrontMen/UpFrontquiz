import styles from '~/styles/index.module.scss'
import AnswersList from "components/AnswersList";
import * as React from "react";
import Player from "components/Player";

export default function Home() {
  return (
    <main className={styles.container}>
        <Player name="player1" />
        <AnswersList/>
        <Player name="player2" />
        <section >
            <button>Pass</button>
            <h1>Question?</h1>
            <input type="text"/>
            <button>Submit</button>
        </section>
    </main>
  )
}
