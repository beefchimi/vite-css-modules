import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { Counter } from "../Counter/Counter.css";

export const Frame = style({
  display: "grid",
  gridTemplateAreas: `'header''main''footer'`,
  gridTemplateRows: "auto 1fr auto",
  width: "100vw",
  height: "100vh",
  fontFamily: vars.typography.fontFamily.common,
});

globalStyle(`${Frame}  code`, {
  fontFamily: vars.typography.fontFamily.code,
});
