import { Slider as ChakraSlider } from "@chakra-ui/react";
import type { SliderProps as ChakraSliderProps } from "@chakra-ui/react";

export const Slider = ChakraSlider;
export interface SliderProps extends ChakraSliderProps {}

import { SliderTrack as ChakraSliderTrack } from "@chakra-ui/react";
import type { SliderTrackProps as ChakraSliderTrackProps } from "@chakra-ui/react";

export const SliderTrack = ChakraSliderTrack;
export interface SliderTrackProps extends ChakraSliderTrackProps {}

import { SliderFilledTrack as ChakraSliderFilledTrack } from "@chakra-ui/react";
import type { BoxProps as ChakraSliderFilledTrackProps } from "@chakra-ui/react";

export const SliderFilledTrack = ChakraSliderFilledTrack;
export interface SliderFilledTrackProps extends ChakraSliderFilledTrackProps {}

import { SliderThumb as ChakraSliderThumb } from "@chakra-ui/react";
import type { SliderThumbProps as ChakraSliderThumbProps } from "@chakra-ui/react";

export const SliderThumb = ChakraSliderThumb;
export interface SliderThumbProps extends ChakraSliderThumbProps {}

import { SliderMark as ChakraSliderMark } from "@chakra-ui/react";
import type { SliderMarkProps as ChakraSliderMarkProps } from "@chakra-ui/react";

export const SliderMark = ChakraSliderMark;
export interface SliderMarkProps extends ChakraSliderMarkProps {}
