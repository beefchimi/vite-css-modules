import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle("::selection", {
  color: vars.color.text.base,
  backgroundColor: vars.color.text.interactive,
});
globalStyle("html, body, #ReactRoot", {
  backgroundColor: vars.color.surface.base,
  height: "100%",
  all: "unset",
  boxSizing: "border-box",
});

globalStyle("a", {
  color: vars.color.brand.hyperLink,
});
