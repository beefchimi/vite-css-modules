/*
 * Even though `animations` is just a `.css` file (instead of `*.css.ts`),
 * it is being imported and parsed within a `*.css.ts` file
 * (and nowhere else). Therefore, the contents of `_animations.css.ts`
 * ultimately just get dumped into this file, and everything is parsed
 * and transformed by CSS Modules as you would expect.
 */
import { style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/theme.css";
import { rotate } from "./_animations.css";
import { iconWrapperBase } from "../../../../styles/shared/_media.css";

export const Logo = style({
  cursor: "pointer",
  flex: "0 0 auto",
  color: vars.color.brand.base,
  backgroundColor: "transparent",
  borderRadius: vars.radius.base,
  transitionProperty: "color, background-color",
  transitionDuration: vars.animation.duration,
  transitionTimingFunction: vars.animation.easing,
});

export const animated = style([
  Logo,
  {
    selectors: {
      [`${Logo} &`]: {
        animation: `pulse 2s infinite ease-in-out alternate`,
      },
    },
  },
]);

export const svg = style([
  iconWrapperBase,
  {
    selectors: {
      [`${animated} &`]: {
        animation: ` 4s infinite linear ${rotate}`,
      },
    },
  },
]);
