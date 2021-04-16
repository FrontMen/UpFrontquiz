import { useCallback, useEffect, useRef } from 'react'
import styles from '~/styles/entry.module.scss'
import { useJoinMutation } from '../graphql'
import useGameState from '~/hooks/gameState'

export const Entry = () => {
  const gameState = useGameState()
  const inputRef = useRef(null)

  const [joinMutation, { data, loading, error }] = useJoinMutation({
    variables: {
      name: ''// value for 'name'
    },
  });

  const onSubmit = useCallback(() => {
    const { value: name } = inputRef.current || {}

    try {
      if (name) {
        joinMutation({ variables: { name } })
      }
    } catch (error) {

    }

  }, [])

  useEffect(() => {
    if (data?.join?.id) {
      const { id, name } = data.join;
      gameState.setUsers((users) => [...(users ? users : []), { id, name }])
    }
  }, [data])

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        what's yu called
      </div>
      <div>
        <input ref={inputRef} onKeyUp={(e) => e.code === 'Enter' || e.key === 'Enter' ? onSubmit() : null} type="text" className={styles.input} />
      </div>
    </div>
  )
}

export default Entry
