import {useState} from 'react';
import type {ReactNode} from 'react';

import styles from './Main.module.css';

export interface MainProps {
  children?: ReactNode;
}

export function Main({children}: MainProps) {
  const [count, setCount] = useState(0);

  function handleIncrementCount() {
    setCount((count) => count + 1);
  }

  return (
    <main className={styles.Main}>
      <h1>Vite / React / TypeScript / CSS Modules</h1>

      <button
        type="button"
        className={styles.Action}
        onClick={handleIncrementCount}
      >
        Current count: {count}
      </button>

      <p>
        Edit any file in <code>/src</code>, save, and watch your changes update
        live in the browser.
      </p>

      <p>
        <a
          className={styles.Hyperlink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className={styles.Hyperlink}
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>

      {children}
    </main>
  );
}
