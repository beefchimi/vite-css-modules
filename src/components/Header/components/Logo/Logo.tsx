import {SvgReactLogo} from '../../../../assets/svg';
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
      <SvgReactLogo />
    </div>
  );
}
