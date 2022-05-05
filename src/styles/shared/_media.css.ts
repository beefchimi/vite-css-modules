import { createVar, fallbackVar, style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const sizeVar = createVar();
export const svgBase = style({
  vars: {
    [sizeVar]: vars.media.iconSize,
  },
  width: fallbackVar(sizeVar, "100%"),
  height: fallbackVar(sizeVar, "100%"),
  overflow: "visible",
  fill: "currentcolor",
});

export const iconWrapperBase = style([
  svgBase,
  {
    display: "grid",
    placeItems: "center",
    flex: "0 0 auto",
    width: sizeVar,
    height: sizeVar,
  },
]);

export const svgDuoTone = (fill = "black") =>
  style({
    fill: fill,
    color: "currentColor",
  });

export const svgColorTransitionBase = style({
  transitionProperty: "fill, color",
  transitionDuration: vars.animation.duration,
  transitionTimingFunction: vars.animation.easing,
});
