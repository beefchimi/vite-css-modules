import { Simulate } from "react-dom/test-utils";
import drop = Simulate.drop;
import { vars } from "../../../../styles/theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const Action = style({
  cursor: "pointer",
  padding: vars.spacing.tight,
  fontSize: vars.typography.fontSize.h2,
  borderRadius: vars.radius.base,
  backgroundColor: "transparent",
  transition: `background-color ${vars.animation.duration} $ {vars.animation.easing}`,
  ":hover": {
    backgroundColor: vars.color.surface.invertDown,
  },
  ":focus": {
    backgroundColor: vars.color.surface.invertDown,
  },
  ":active": {
    backgroundColor: "transparent",
  },
});

const NavMenuWidth = createVar("160px");

export const Menu = style({
  display: "none",
  position: "absolute",
  top: vars.components.header.height,
  right: 0,
  width: NavMenuWidth,
  background: vars.color.surface.invert,
});

export const menuActive = style({
  display: "block",
});

export const Item = style({
  selectors: {
    [`:firstChild &`]: {
      paddingTop: vars.spacing.tight,
    },
    [`:lastChild &`]: {
      paddingBottom: vars.spacing.tight,
    },
  },
});

export const Link = style({
  display: "block",
  padding: `${vars.spacing.tight} ${vars.spacing.loose}`,
  fontSize: vars.typography.fontSize.h3,
  fontWeight: vars.typography.fontWeight.bold,
  color: vars.color.text.base,
});

export const NavEmptyState = style({
  cursor: "no-drop",
});
