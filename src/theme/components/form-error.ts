import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  text: {
    color: "state.error",
    fontSize: "md",
    paddingTop: 2,
  },
});

export const formErrorTheme = defineMultiStyleConfig({
  baseStyle,
});
