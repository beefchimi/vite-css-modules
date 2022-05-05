import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const Frame = style({
  display: "grid",
  gridTemplateAreas: `'header''main''footer'`,
  gridTemplateRows: "auto 1fr auto",
  width: "100vw",
  height: "100vh",
  fontFamily: vars.typography.fontFamily.common,
});

export const code = style({
  selectors: {
    [`${Frame} &`]: {
      fontFamily: vars.typography.fontFamily.code,
    },
  },
});
