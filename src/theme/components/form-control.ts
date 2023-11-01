import { formAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  container: {
    width: "100%",
    position: "relative",
  },
});

export const formControlTheme = defineMultiStyleConfig({
  baseStyle,
});
