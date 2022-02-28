import {useState} from 'react';

import {classNames} from '../../utilities';
import styles from './Counter.module.css';

export interface CounterProps {
  initialCount?: number;
}

export function Counter({initialCount = 0}: CounterProps) {
  const [count, setCount] = useState(initialCount);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  const decrementClassnames = classNames(styles.Action, {
    [styles.decrement]: true,
  });

  const incrementClassnames = classNames(styles.Action, {
    [styles.increment]: true,
  });

  return (
    <div className={styles.Counter}>
      <h2 className={styles.Title}>Counter component</h2>

      <div className={styles.ActionWrapper}>
        <button
          type="button"
          className={decrementClassnames}
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <button
          type="button"
          className={incrementClassnames}
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>

      <p>
        <strong>The current count is:</strong> <code>{count}</code>
      </p>
    </div>
  );
}
