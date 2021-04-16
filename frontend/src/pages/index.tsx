import styles from '~/styles/index.module.scss'
import AnswersList from "components/AnswersList";

export default function Home() {
  return (
    <main className={styles.container}>
        <section >
            <header>
                <h2>Team 1</h2>
            </header>
        </section>
        <AnswersList/>
        <section >
            <header>
                <h2>Team 2</h2>
            </header>
        </section>
        <section >
            <button>Pass</button>
            <h1>Question?</h1>
            <input type="text"/>
            <button>Submit</button>
        </section>
    </main>
  )
}
