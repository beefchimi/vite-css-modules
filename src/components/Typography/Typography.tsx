import type {ReactNode} from 'react';
import {classNames, variationName} from '../../utilities';

import {TypographyAlign, TypographySpacing} from './types';
import * as styles from './Typography.css';

export interface TypographyProps {
  children: ReactNode;
  align?: TypographyAlign;
  spacing?: TypographySpacing;
}

export function Typography({
  children,
  align = TypographyAlign.Left,
  spacing = TypographySpacing.Base,
}: TypographyProps) {
  const typographyClassNames = classNames(styles.Typography, {
    [variationName('align', align, styles)]: Boolean(align),
    [variationName('spacing', spacing, styles)]: Boolean(spacing),
  });

  return <div className={typographyClassNames}>{children}</div>;
}
