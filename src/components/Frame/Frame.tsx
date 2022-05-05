import type { ReactNode } from "react";

import * as styles from "./Frame.css";

export interface FrameProps {
  children: ReactNode;
}

export function Frame({ children }: FrameProps) {
  return <div className={styles.Frame}>{children}</div>;
}
