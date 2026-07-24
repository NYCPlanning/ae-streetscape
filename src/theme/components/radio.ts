import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([...radioAnatomy.keys, "dot"]);

// default sizes in pixels
const baseControlSize = 24;
const baseDotSize = 14;

const baseStyleContainer = defineStyle({
  display: "flex",
  alignItems: "center",
});

const baseStyleControl = defineStyle({
  w: `${baseControlSize}px`,
  h: `${baseControlSize}px`,
  border: "2px solid",
  borderRadius: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  transition: "all 0.2s",
  borderColor: "gray.600",
  _checked: {
    borderColor: "primary.500",
  },
  _hover: {
    borderColor: "primary.700",
    ".inner-dot": {
      bg: "primary.700",
      transform: "scale(1)",
    },
  },
  _disabled: {
    borderColor: "gray.400",
    "&:not([data-checked])": {
      bg: "gray.300",
    },
    ".inner-dot": {
      bg: "gray.300",
    },
  },
  _focusVisible: {
    boxShadow: "0 0 0 4px rgba(10, 83, 221, 0.20)",
  },
});

const baseStyleDot = defineStyle({
  w: `${baseDotSize}px`,
  h: `${baseDotSize}px`,
  bg: "primary.500",
  borderRadius: "full",
  transition: "transform 0.2s",
});

const baseStyleLabel = defineStyle({});

const baseStyle = definePartsStyle({
  dot: baseStyleDot,
  container: baseStyleContainer,
  control: baseStyleControl,
  label: baseStyleLabel,
});

const sizes = {
  xs: definePartsStyle({
    control: {
      width: `${baseControlSize - 8}px`,
      height: `${baseControlSize - 8}px`,
    },
    dot: {
      width: `${baseDotSize - 4}px`,
      height: `${baseDotSize - 4}px`,
    },
    label: { fontSize: "xs" },
  }),
  sm: definePartsStyle({
    control: {
      width: `${baseControlSize - 4}px`,
      height: `${baseControlSize - 4}px`,
    },
    dot: {
      width: `${baseDotSize - 2}px`,
      height: `${baseDotSize - 2}px`,
    },
    label: { fontSize: "sm" },
  }),
  md: definePartsStyle({
    control: {
      width: `${baseControlSize}px`,
      height: `${baseControlSize}px`,
    },
    dot: {
      width: `${baseDotSize}px`,
      height: `${baseDotSize}px`,
    },
    label: { fontSize: "md" },
  }),
  lg: definePartsStyle({
    control: {
      width: `${baseControlSize + 2}px`,
      height: `${baseControlSize + 2}px`,
    },
    dot: {
      width: `${baseDotSize + 2}px`,
      height: `${baseDotSize + 2}px`,
    },
    label: { fontSize: "lg" },
  }),
  xl: definePartsStyle({
    control: {
      width: `${baseControlSize + 4}px`,
      height: `${baseControlSize + 4}px`,
    },
    dot: {
      width: `${baseDotSize + 4}px`,
      height: `${baseDotSize + 4}px`,
    },
    label: { fontSize: "xl" },
  }),
};

const variants = {
  base: {},
};

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: "base",
    size: "md",
  },
});
