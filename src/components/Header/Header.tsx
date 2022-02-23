import {Logo} from './components';
import type {LogoProps} from './components';
import styles from './Header.module.css';

export interface HeaderProps {
  navItems?: string[];
  animateLogo?: LogoProps['animate'];
}

export function Header({navItems = [], animateLogo = false}: HeaderProps) {
  console.log('navItems', navItems);

  return (
    <header className={styles.Header}>
      <Logo animate={animateLogo} />
      <h1 className={styles.Title}>CSS Modules</h1>
    </header>
  );
}
