import {
  Fade as ChakraFade,
  ScaleFade as ChakraScaleFade,
  Slide as ChakraSlide,
  SlideFade as ChakraSlideFade,
  Collapse as ChakraCollapse,
} from "@chakra-ui/react";

import type {
  FadeProps as ChakraFadeProps,
  ScaleFadeProps as ChakraScaleFadeProps,
  SlideProps as ChakraSlideProps,
  SlideFadeProps as ChakraSlideFadeProps,
  CollapseProps as ChakraCollapseProps,
} from "@chakra-ui/react";

export const Fade = ChakraFade;
export interface FadeProps extends ChakraFadeProps {}

export const ScaleFade = ChakraScaleFade;
export interface ScaleFadeProps extends ChakraScaleFadeProps {}

export const Slide = ChakraSlide;
export interface SlideProps extends ChakraSlideProps {}

export const SlideFade = ChakraSlideFade;
export interface SlideFadeProps extends ChakraSlideFadeProps {}

export const Collapse = ChakraCollapse;
export interface CollapseProps extends ChakraCollapseProps {}
