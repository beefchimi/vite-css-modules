import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const Counter = style({
  padding: vars.spacing.tight,
  textAlign: "center",
  border: `${vars.border.width} solid ${vars.color.surface.invertDown}`,
  borderRadius: vars.radius.loose,
});

globalStyle(`${Counter}  code`, {
  padding: "2px 4px",
  color: vars.color.brand.down,
  backgroundColor: vars.color.surface.down,
  borderRadius: vars.radius.tight,
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
    [`span:hover &`]: {
      backgroundColor: vars.color.brand.down,
    },
    [`span:active &`]: {
      backgroundColor: vars.color.brand.base,
    },
    [`span[disabled] &`]: {
      pointerEvents: "none",
      backgroundColor: vars.color.surface.neutral,
      opacity: 0.8,
    },
  },
});

export const Decrement = style([Action]);

export const Increment = style([Action]);

export const ActionLabel = style({
  display: "block",
  selectors: {
    [`${Decrement} &::before`]: {
      content: "🔥",
      marginRight: vars.spacing.tighter,
    },
    [`${Increment} &::after`]: {
      content: "✨",
      marginLeft: vars.spacing.tighter,
    },
  },
});
