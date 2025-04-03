import { numberInputAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

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
    background: "white",
    border: "1px solid",
    borderColor: "gray.400",
    borderRadius: "base",
    color: "gray.600",
    py: 2,
    px: 3,
    width: "full",
    _hover: {
      borderColor: "brand.800",
    },
    _invalid: {
      outline: 0,
      border: 0,
      ring: "2px",
      ringColor: "state.error",
    },
    _focusVisible: {
      outline: 0,
      border: 0,
      ring: "2px",
      ringColor: "state.focus",
    },
    _disabled: {
      border: "1px solid",
      borderColor: "gray.400",
      background: "gray.100",
    },
  },
});

const stepper = defineStyle({
  margin: 0.25,
  paddingX: 2,
  fontSize: "xs",
  backgroundColor: "gray.100",
  _odd: {
    borderTopRightRadius: "base",
  },
  _even: {
    borderBottomRightRadius: "base",
  },
});

const sizes = {
  lg: definePartsStyle({
    field: { fontSize: "md", height: 12 },
    stepper,
  }),
  md: definePartsStyle({
    field: { fontSize: "sm", height: 10 },
    stepper,
  }),
  sm: definePartsStyle({
    field: { fontSize: "sm", height: 8 },
    stepper,
  }),
};

export const numberInputTheme = defineMultiStyleConfig({
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
