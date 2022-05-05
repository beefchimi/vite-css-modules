import type { ReactNode } from "react";

import { beefchimiImgUrl } from "../../assets/media";
import { Typography, TypographyAlign, TypographySpacing } from "../Typography";

import * as styles from "./Main.css";

export interface MainProps {
  children?: ReactNode;
}

export function Main({ children }: MainProps) {
  const childrenMarkup = children ? (
    <div className={styles.Children}>{children}</div>
  ) : null;

  return (
    <main className={styles.Main}>
      <Typography
        align={TypographyAlign.Center}
        spacing={TypographySpacing.Loose}
      >
        <div className={styles.Beefchimi}>
          <img
            src={beefchimiImgUrl}
            className={styles.Thumbnail}
            alt="Take my to your leader"
          />
        </div>

        <h1>Vite / React / TypeScript / Vanilla Extract</h1>

        <p>
          Edit any file in <code>/src</code>, save, and watch your changes
          update live in the browser.
        </p>

        <p>
          <a
            className={styles.Hyperlink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className={styles.Hyperlink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className={styles.Hyperlink}
            href="https://vanilla-extract.style/documentation/styling-api/#style"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanilla Extract Docs
          </a>
        </p>
      </Typography>

      {childrenMarkup}
    </main>
  );
}
