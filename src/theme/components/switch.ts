import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyleContainer = defineStyle({});

const baseStyleThumb = defineStyle({
  borderRadius: "100px",
  bg: "white",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
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
    container: { width: "28px", height: "16px" },
    track: {
      width: "12px",
      height: "12px",
      padding: "2px 14px 2px 2px",
      _checked: {
        padding: "2px 2px 2px 14px",
      },
    },
    thumb: { width: "12px", height: "12px" },
  }),
  lg: definePartsStyle({
    container: { width: "36px", height: "20px" },
    track: {
      width: "16px",
      height: "16px",
      padding: "2px 18px 2px 2px",
      _checked: {
        padding: "2px 2px 2px 18px",
      },
    },
    thumb: { width: "16px", height: "16px" },
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
