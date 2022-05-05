import {
  assignVars,
  createVar,
  globalStyle,
  style,
} from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const Main = style({
  gridArea: "main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.spacing.tight,
  fontSize: vars.typography.fontSize.text,
  color: vars.color.text.invert,
});

export const Children = style({
  marginTop: vars.spacing.loose,
  paddingTop: vars.spacing.loose,
  borderTop: `${vars.border.width} dashed ${vars.color.surface.invert}`,
});

/* Typography */
export const beefchimiSize = createVar();

export const Beefchimi = style({
  vars: {
    [beefchimiSize]: "100px",
  },
  cursor: "zoom-in",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: beefchimiSize,
  height: beefchimiSize,
  borderRadius: "var(--radius-loose)",
  overflow: "hidden",
  transition: "max-width 1s ease-in-out",
  ":hover": {
    maxWidth: `calc(${beefchimiSize} * 4)`,
  },
});

export const Thumbnail = style({
  transition: "transform 1s ease-in-out",
  selectors: {
    [`${Beefchimi}:hover &`]: {
      transform: "translateY(-20%)",
    },
  },
});

globalStyle(`${Main} > h1`, {
  fontSize: "vars.font.size.h1)",
  fontWeight: "vars.font.weight.bold)",
});

globalStyle(`${Main} > p`, {
  fontSize: "vars.font.size.h3)",
});

export const Hyperlink = style({
  color: vars.color.brand.hyperLink,
  textDecoration: "underline",
  ":hover": {
    vars: assignVars(vars.color.brand, {
      ...vars.color.brand,
      hyperLink: vars.color.text.interactiveUp,
    }),
  },
  ":active": {
    vars: assignVars(vars.color.brand, {
      ...vars.color.brand,
      hyperLink: vars.color.text.interactiveDown,
    }),
  },
  ":focus": {
    vars: assignVars(vars.color.brand, {
      ...vars.color.brand,
      hyperLink: vars.color.text.interactiveUp,
    }),
  },
});
