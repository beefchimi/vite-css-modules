import { SvgReactLogo } from "../../../../assets/svg";
import * as styles from "./Logo.css";

export interface LogoProps {
  animate?: boolean;
}

export function Logo({ animate = false }: LogoProps) {
  const logoStyles = animate ? styles.animated : styles.Logo;

  return (
    <div className={logoStyles}>
      <SvgReactLogo className={styles.svg} />
    </div>
  );
}
