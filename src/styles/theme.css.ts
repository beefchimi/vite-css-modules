import { createGlobalTheme } from "@vanilla-extract/css";
import * as tokens from "./tokens/_index.css";

export const vars = createGlobalTheme("#ReactRoot", {
  ...tokens,
});
