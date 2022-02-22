import type {ReactNode} from 'react';

import styles from './Footer.module.css';

export interface FooterProps {
  children: ReactNode;
}

export function Footer({children}: FooterProps) {
  return <footer className={styles.Footer}>{children}</footer>;
}
