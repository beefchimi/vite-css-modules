import type {ReactNode} from 'react';

import styles from './Frame.module.css';

export interface FrameProps {
  children: ReactNode;
}

export function Frame({children}: FrameProps) {
  return <div className={styles.Frame}>{children}</div>;
}
