// import { defineStyleConfig } from "@chakra-ui/react";
import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  addon: {
    borderRadius: "base",
    px: 3,
    py: 2,
  },
  field: {
    // Set default width to full (100%) so input takes width of parent. Chakra default theme does this as well.
    width: "full",
    borderRadius: "base",
    px: 3,
    border: "1px solid",
    borderColor: "gray.400",
    color: "teal.400",
    // TODO - fill in pseudo class styles below
    _hover: {
      borderColor: "brand.800",
    },
    _invalid: {
      border: "2px solid",
      borderColor: "state.error",
    },
    _focusVisible: {
      border: "2px solid",
      borderColor: "state.focus",
      color: "gray.600",
    },
    _disabled: {},
  },
});

const sizes = {
  lg: definePartsStyle({
    field: { fontSize: "md", height: 12 },
  }),
  md: definePartsStyle({
    field: { fontSize: "sm", height: 10 },
  }),
  sm: definePartsStyle({
    field: { fontSize: "sm", height: 8 },
  }),
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: {
    base: {},
  },
  defaultProps: {
    size: "md",
    variant: "base",
  },
});
