import {useCallback, useState} from 'react';

import {classNames} from '../../utilities';
import styles from './Counter.module.css';

export interface CounterProps {
  initialCount?: number;
  min?: number;
  max?: number;
}

export function Counter({initialCount = 0, min, max}: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = useCallback(() => {
    if (count !== min) {
      setCount((count) => count - 1);
    }
  }, [count, min]);

  const handleIncrement = useCallback(() => {
    if (count !== max) {
      setCount((count) => count + 1);
    }
  }, [count, max]);

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
          disabled={min !== undefined && count <= min}
          onClick={handleDecrement}
        >
          <span className={styles.ActionLabel}>Decrement</span>
        </button>

        <button
          type="button"
          className={incrementClassnames}
          disabled={max !== undefined && count >= max}
          onClick={handleIncrement}
        >
          <span className={styles.ActionLabel}>Increment</span>
        </button>
      </div>

      <p>
        <strong>The current count is:</strong> <code>{count}</code>
      </p>
    </div>
  );
}
