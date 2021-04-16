import { useCallback, useRef, useState } from 'react';
import styles from '~/styles/entry.module.scss';
import { useJoinMutation } from '../graphql';

interface EntryProps {
  setActivePlayerId: (id: string) => void;
}

export const Entry: React.FC<EntryProps> = ({ setActivePlayerId }) => {
  const [name, setName] = useState('');

  const [joinMutation] = useJoinMutation({
    onCompleted: (data) => {
      setActivePlayerId(data.join.id);
    },
  });

  const onSubmit = useCallback(() => {
    if (name) {
      joinMutation({ variables: { name } });
    }
  }, [name]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>what's yu called</div>
      <div>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          onKeyUp={(e) => (e.code === 'Enter' || e.key === 'Enter' ? onSubmit() : null)}
          type="text"
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Entry;
