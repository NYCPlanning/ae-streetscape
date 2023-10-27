import { formAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// const baseStyleRequiredIndicator = defineStyle({
// });

const baseStyleHelperText = defineStyle({
  background: "white",
  border: "1px solid",
  borderColor: "gray.400",
  borderRadius: "base",
  color: "gray.600",
  _hover: {
    borderColor: "brand.800",
  },
  // TOKEN
  padding: "8px 12px",
});

const baseStyle = definePartsStyle({
  container: {
    width: "100%",
    position: "relative",
  },
  helperText: baseStyleHelperText,
});

export const formControlTheme = defineMultiStyleConfig({
  baseStyle,
});
