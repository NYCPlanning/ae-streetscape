import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { calc, cssVar } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");
const $diff = cssVar("switch-track-diff");
const diffValue = calc.subtract($width, $height);
const $translateX = cssVar("switch-thumb-x");

const baseStyleContainer = defineStyle({
  [$diff.variable]: diffValue,
  [$translateX.variable]: $diff.reference,
  _rtl: {
    [$translateX.variable]: calc($diff).negate().toString(),
  },
});

const baseStyleThumb = defineStyle({
  borderRadius: "full",
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  boxShadow: "0 0.25 0.25 0 rgba(0, 0, 0, 0.08)",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`,
  },
});

const baseStyleTrack = defineStyle({
  bg: "gray.700",
  alignItems: "center",
  width: [$width.reference],
  height: [$height.reference],
  p: "0.5",
  borderRadius: "full",
  transitionProperty: "common",
  transitionDuration: "fast",
  _checked: {
    bg: "primary.500",
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
    container: {
      [$width.variable]: "sizes.6",
      [$height.variable]: "sizes.4",
    },
  }),
  lg: definePartsStyle({
    container: {
      [$width.variable]: "sizes.8",
      [$height.variable]: "sizes.5",
    },
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
