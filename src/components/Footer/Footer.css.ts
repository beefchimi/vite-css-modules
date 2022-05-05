import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { iconWrapperBase } from "../../styles/shared/_media.css";

export const Footer = style({
  gridArea: "footer",
  display: "grid",
  alignContent: "center",
  justifyItems: "center",
  padding: "var(--spacing-tight)",
  minHeight: "var(--footer-height)",
  backgroundColor: "var(--color-brand)",

  "@media": {
    [`screen and (min-width: ${vars.breakpoint.tablet})`]: {
      gridTemplateColumns: "auto auto",
      justifyItems: "unset",
      padding: "var(--spacing-loose)",
    },
  },
});

// .socialLinks {?
// Even though this declaration doesn't actually contain any styles,
// the variant className will still get added to the markup.
// If we care about this, we could write some build tooling to parse
// each declaration for contents and assign `undefined` if empty.
// Alternatively, there might be a PostCSS plugin for this.
// }
//

export const Children = style({
  selectors: {
    [`p &`]: {
      fontSize: vars.typography.fontSize.subtext,
      fontWeight: vars.typography.fontWeight.bold,
      color: vars.color.text.base,
    },
  },
});

export const SocialList = style({
  display: "flex",
  gap: vars.spacing.tight,
  marginTop: vars.spacing.tight,

  "@media": {
    [`screen and (min-width: ${vars.breakpoint.tablet})`]: {
      justifyContent: "end",
      marginTop: 0,
    },
  },
});

export const SocialItem = style({
  flex: "0 0 auto",
});

export const SocialIcon = style([
  iconWrapperBase,
  {
    color: vars.color.text.base,
  },
]);
