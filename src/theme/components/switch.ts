import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyleContainer = defineStyle({});

const baseStyleThumb = defineStyle({
  borderRadius: "100px",
  bg: "white",
  boxShadow: "0 0.25 0.25 0 rgba(0, 0, 0, 0.08)",
  flexShrink: "0",
});

const baseStyleTrack = defineStyle({
  bg: "gray.700",
  alignItems: "center",
  flexShrink: "0",
  borderRadius: "100px",
  _checked: {
    bg: "primary.500",
    justifyContent: "flex-end",
  },
  _disabled: {
    bg: "gray.300",
  },
});

// Combine the 3 components of the switch
const baseStyle = definePartsStyle(() => ({
  track: baseStyleTrack,
  container: baseStyleContainer,
  thumb: baseStyleThumb,
}));

const sizes = {
  sm: definePartsStyle({
    container: { width: 7, height: 4 },
    track: {
      width: "28px",
      height: 3,
      padding: 0.5,
    },
    thumb: { width: 3, height: 3 },
  }),
  lg: definePartsStyle({
    container: { width: 9, height: 5 },
    track: {
      width: "34px",
      height: 4,
      padding: 0.5,
    },
    thumb: { width: 4, height: 4 },
  }),
};

const variants = {
  base: {},
};

export const switchTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "lg",
    variant: "base",
  },
});
