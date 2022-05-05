import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

/*
.GlobalInterior {
  background-color: green;
}
*/

export const Local = style({
  selectors: {
    ["p &"]: {
      color: vars.color.success.base,
    },
  },
});

export const LocalvGlobal = style({
  marginTop: vars.spacing.loosest,
  padding: vars.spacing.base,
  border: `${vars.border.width} dashed ${vars.color.surface.invertUp}`,
  borderRadius: vars.radius.loose,
});
