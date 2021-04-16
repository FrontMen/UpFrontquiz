import styles from '~/styles/answerslist.module.scss'

export default function AnswersList() {
    return (
        <section className={styles.answerslist}>
            <header>
                <h2>Answers</h2>
            </header>
            <ul>
                <li>answer 1</li>
                <li>answer 2</li>
                <li>answer 3</li>
                <li>answer 4</li>
                <li>answer 5</li>
            </ul>
        </section>
    )
}
