import type {ReactNode} from 'react';

import {classNames} from '../../utilities';
import {IconInstagram, IconTikTok, IconTwitch} from '../../assets/icons';

import styles from './Footer.module.css';

export interface FooterProps {
  children: ReactNode;
  socialLinks?: boolean;
}

export function Footer({children, socialLinks = false}: FooterProps) {
  const footerClassNames = classNames(styles.Footer, {
    [styles.socialLinks]: socialLinks,
  });

  const socialMarkup = socialLinks ? (
    <ul className={styles.SocialList}>
      <li className={styles.SocialItem}>
        <div className={classNames(styles.SocialIcon, styles.instagram)}>
          <IconInstagram />
        </div>
      </li>
      <li className={styles.SocialItem}>
        <div className={classNames(styles.SocialIcon, styles.tiktok)}>
          <IconTikTok />
        </div>
      </li>
      <li className={styles.SocialItem}>
        <div className={classNames(styles.SocialIcon, styles.twitch)}>
          <IconTwitch />
        </div>
      </li>
    </ul>
  ) : null;

  return (
    <footer className={footerClassNames}>
      <div className={styles.Children}>{children}</div>

      {socialMarkup}
    </footer>
  );
}
