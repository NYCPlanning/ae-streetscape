import { sliderAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  cssVar,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(sliderAnatomy.keys);

const $thumbSize = cssVar("slider-thumb-size");
const $trackSize = cssVar("slider-track-size");
const $bg = cssVar("slider-bg");

const baseStyleContainer = defineStyle({});

const baseStyleTrack = defineStyle({
  borderRadius: "0.25rem",
  border: "0.5px solid",
  borderColor: "primary.500",
  [$bg.variable]: "colors.gray.300",
});

const baseStyleFilledTrack = defineStyle({
  [$bg.variable]: "colors.primary.100",
});

const baseStyleThumb = defineStyle({
  border: "1px solid",
  borderColor: "gray.500",
  bg: "white",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
});

const sizeMd = definePartsStyle({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1.5`,
  },
});

const sizes = {
  md: sizeMd,
};

// Combine the 4 components of the slider
// There is no style property for Mark
const baseStyle = definePartsStyle(() => ({
  container: baseStyleContainer,
  track: baseStyleTrack,
  thumb: baseStyleThumb,
  filledTrack: baseStyleFilledTrack,
}));

export const sliderThemeExtension = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
  },
});

const extendedTheme = extendTheme({
  components: { Slider: sliderThemeExtension },
});

export const sliderTheme = extendedTheme.components.Slider;
