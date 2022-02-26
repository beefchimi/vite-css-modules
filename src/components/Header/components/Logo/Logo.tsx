import {SvgLogo} from '../../../../assets';
import {classNames} from '../../../../utilities';
import styles from './Logo.module.css';

export interface LogoProps {
  animate?: boolean;
}

export function Logo({animate = false}: LogoProps) {
  const logoClassNames = classNames(styles.Logo, {
    [styles.animate]: animate,
  });

  return (
    <div className={logoClassNames}>
      <SvgLogo />
    </div>
  );
}
