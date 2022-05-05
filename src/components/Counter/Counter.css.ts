import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const Counter = style({
  padding: vars.spacing.tight,
  textAlign: "center",
  border: vars.border.width,
  borderRadius: vars.radius.loose,
});

export const code = style({
  selectors: {
    [`${Counter} &`]: {
      padding: " 2px 4px",
      color: vars.color.brand.down,
      backgroundColor: vars.color.surface.down,
      borderRadius: vars.radius.tight,
    },
  },
});

export const Title = style({
  fontSize: vars.typography.fontSize.h3,
  fontWeight: vars.typography.fontWeight.bold,
});

export const ActionWrapper = style({
  display: "flex",
  gap: vars.spacing.tight,
  justifyContent: "center",
});

// TODO: Make a button mixin
//
export const Action = style({
  cursor: "pointer",
  padding: vars.spacing.tight,
  fontSize: vars.typography.fontSize.subtitle,
  fontWeight: vars.typography.fontWeight.bold,
  textAlign: "center",
  color: vars.color.text.base,
  backgroundColor: vars.color.brand.base,
  borderRadius: vars.radius.base,
  transition: "backgroundColor $motionDuration $motionEasing",

  selectors: {
    ":hover &": {
      backgroundColor: vars.color.brand.down,
    },
    ":active &": {
      backgroundColor: vars.color.brand.base,
    },

    "[disabled] &": {
      pointerEvents: "none",
      backgroundColor: vars.color.surface.neutral,
      opacity: 0.8,
    },
  },
});

export const ActionLabel = style({
  display: "block",
});

export const decrement = style({
  selectors: {
    [`&::before &`]: {
      content: "🔥",
      marginRight: vars.spacing.tighter,
    },
  },
});

export const increment = style({
  selectors: {
    ["&::after &"]: {
      content: "✨",
      marginLeft: vars.spacing.tighter,
    },
  },
});
