import logo from '../../logo.svg?raw';

import styles from './Header.module.css';

export interface HeaderProps {
  navItems?: string[];
  animateLogo?: boolean;
}

export function Header({navItems = [], animateLogo = false}: HeaderProps) {
  console.log('logo', logo);

  console.log('navItems', navItems);
  console.log('animateLogo', animateLogo);

  return (
    <header className={styles.Header}>
      <div className={styles.LogoWrapper}>
        <img src={logo} className={styles.Logo} alt="logo" />
      </div>
    </header>
  );
}
