import { numberInputAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { inputTheme } from "./input";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const stepper = defineStyle({
  margin: 0.25,
  paddingX: 2,
  fontSize: "xs",
  _odd: {
    borderTopRightRadius: "base",
  },
  _even: {
    borderBottomRightRadius: "base",
  },
});

const sizes = {
  lg: definePartsStyle({
    ...inputTheme.sizes?.lg,
    stepper,
  }),
  md: definePartsStyle({
    ...inputTheme.sizes?.md,
    stepper,
  }),
  sm: definePartsStyle({
    ...inputTheme.sizes?.sm,
    stepper,
  }),
};

export const numberInputTheme = defineMultiStyleConfig({
  baseStyle: inputTheme.baseStyle,
  sizes,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps,
});
