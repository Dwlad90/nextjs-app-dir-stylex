import stylex from "@stylexjs/stylex";
import stylex2 from "@stylexjs/stylex";

export const colors = stylex.defineVars({  green_500: "#73cc4a",
});

export const globalTokens = stylex2.defineVars({
  success: colors.green_500,
});
