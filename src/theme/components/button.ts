import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    backgroundColor: "primary.600",
    color: "white",
    px: 6,
    py: 3,
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    primary: {},
    secondary: {},
    tertiary: {},
  },
  defaultProps: {},
});
