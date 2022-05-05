import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const Header = style({
  position: "relative",
  gridArea: "header",
  display: "flex",
  gap: vars.spacing.loose,
  alignItems: "center",
  padding: vars.spacing.tight,
  height: vars.components.header.height,
  backgroundColor: vars.color.surface.invert,
});

export const Title = style({
  flex: "1 1 auto",
  fontSize: vars.typography.fontSize.h3,
  fontWeight: vars.typography.fontWeight.bold,
  color: vars.color.text.base,
  animation: "globalWiggleAnimation infinite 2s linear",
});

export const NavWrapper = style({
  flex: "0 0 auto",
  marginLeft: "auto",
});
