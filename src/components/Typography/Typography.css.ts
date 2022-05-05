import { createVar, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const typographySpacing = createVar(vars.spacing.base);

export const Typography = style({
  marginTop: typographySpacing,
});

export const alignLeft = style({
  textAlign: "left",
});

export const alignCenter = style({
  textAlign: "center",
});

export const alignRight = style({
  textAlign: "right",
});

export const spacingBase = style({
  /* `.Typography` already defined and uses the "base" spacing */
});

export const spacingTight = style({
  [typographySpacing]: vars.spacing.tight,
});

export const spacingLoose = style({
  [typographySpacing]: vars.spacing.loose,
});
