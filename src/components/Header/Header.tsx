import {Logo, Nav} from './components';
import type {LogoProps, NavProps} from './components';

import styles from './Header.module.css';

export interface HeaderProps {
  navItems?: NavProps['items'];
  animateLogo?: LogoProps['animate'];
}

export function Header({navItems = [], animateLogo = false}: HeaderProps) {
  const navMarkup = navItems.length ? (
    <Nav items={navItems} />
  ) : (
    <Nav.EmptyState />
  );

  return (
    <header className={styles.Header}>
      <Logo animate={animateLogo} />
      <span className={styles.Title}>CSS Modules</span>

      <div className={styles.NavWrapper}>{navMarkup}</div>
    </header>
  );
}
