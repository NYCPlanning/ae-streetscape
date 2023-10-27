import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  // defineStyle
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// const baseStyleText = defineStyle({});

// const baseStyleIcon = defineStyle({});

const baseStyle = definePartsStyle({});

export const formErrorTheme = defineMultiStyleConfig({
  baseStyle,
});
