import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { inputTheme } from "./input";
import { defineStyle } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  icon: {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: {
      opacity: 0.5,
    },
  },
  field: {
    ...inputTheme.baseStyle?.field,
    appearance: "none",
    bg: "white",
    "&[data-is-cancellable=true]": {
      paddingRight: 16,
    },
  },
});

const iconSpacing = defineStyle({
  paddingInlineEnd: "8",
});

const sizes = {
  lg: {
    ...inputTheme.sizes?.lg,
    field: {
      ...inputTheme.sizes?.lg.field,
      ...iconSpacing,
    },
  },
  md: {
    ...inputTheme.sizes?.md,
    field: {
      ...inputTheme.sizes?.md.field,
      ...iconSpacing,
    },
  },
  sm: {
    ...inputTheme.sizes?.sm,
    field: {
      ...inputTheme.sizes?.sm.field,
      ...iconSpacing,
    },
  },
};

export const selectTheme = defineMultiStyleConfig({
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
