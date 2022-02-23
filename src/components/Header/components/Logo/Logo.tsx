import {SvgLogo} from '../../../../assets';
import styles from './Logo.module.css';

export interface LogoProps {
  animate?: boolean;
}

export function Logo({animate = false}: LogoProps) {
  console.log('animate', animate);

  return (
    <div className={styles.Logo}>
      <SvgLogo />
    </div>
  );
}
