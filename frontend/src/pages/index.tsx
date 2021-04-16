import styles from '~/styles/index.module.scss'
import BackgroundComponent from '../components/background'

export default function Home() {
  return (
    <div className={styles.container}>
      <BackgroundComponent />
    </div>
  )
}
