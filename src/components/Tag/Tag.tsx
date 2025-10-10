import {
  Tag as ChakraTag,
  TagLabel as ChakraTagLabel,
  TagLeftIcon as ChakraTagLeftIcon,
  TagRightIcon as ChakraTagRightIcon,
  TagCloseButton as ChakraTagCloseButton,
} from "@chakra-ui/react";
import type {
  TagProps as ChakraTagProps,
  TagLabelProps as ChakraTagLabelProps,
  TagCloseButtonProps as ChakraTagCloseButtonProps,
  IconProps,
} from "@chakra-ui/react";

export const Tag = ChakraTag;
export interface TagProps extends ChakraTagProps {}

export const TagLabel = ChakraTagLabel;
export interface TagLabelProps extends ChakraTagLabelProps {}

export const TagLeftIcon = ChakraTagLeftIcon;
export interface TagLeftIconProps extends IconProps {}

export const TagRightIcon = ChakraTagRightIcon;
export interface TagRightIconProps extends IconProps {}

export const TagCloseButton = ChakraTagCloseButton;
export interface TagCloseButtonProps extends ChakraTagCloseButtonProps {}
