import {SvgLogo} from '../../assets';
import styles from './Header.module.css';

export interface HeaderProps {
  navItems?: string[];
  animateLogo?: boolean;
}

export function Header({navItems = [], animateLogo = false}: HeaderProps) {
  console.log('navItems', navItems);
  console.log('animateLogo', animateLogo);

  return (
    <header className={styles.Header}>
      <div className={styles.LogoWrapper}>
        <SvgLogo />
      </div>
    </header>
  );
}
