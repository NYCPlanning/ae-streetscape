import { Popover as ChakraPopover } from "@chakra-ui/react";
import type { PopoverProps as ChakaPopoverProps } from "@chakra-ui/react";

export const Popover = ChakraPopover;
export interface PopoverProps extends ChakaPopoverProps {}

import { PopoverTrigger as ChakraPopoverTrigger } from "@chakra-ui/react";
export const PopoverTrigger = ChakraPopoverTrigger;

import { PopoverContent as ChakraPopoverContent } from "@chakra-ui/react";
import { PopoverContentProps as ChakraPopoverContentProps } from "@chakra-ui/react";

export const PopoverContent = ChakraPopoverContent;
export interface PopoverContentProps extends ChakraPopoverContentProps {}

import { PopoverHeader as ChakraPopoverHeader } from "@chakra-ui/react";
import { PopoverHeaderProps as ChakraPopoverHeaderProps } from "@chakra-ui/react";

export const PopoverHeader = ChakraPopoverHeader;
export interface PopoverHeaderProps extends ChakraPopoverHeaderProps {}

import { PopoverBody as ChakraPopoverBody } from "@chakra-ui/react";
import { PopoverBodyProps as ChakraPopoverBodyProps } from "@chakra-ui/react";

export const PopoverBody = ChakraPopoverBody;
export interface PopoverBodyProps extends ChakraPopoverBodyProps {}

import { PopoverFooter as ChakraPopoverFooter } from "@chakra-ui/react";
import { PopoverFooterProps as ChakraPopoverFooterProps } from "@chakra-ui/react";

export const PopoverFooter = ChakraPopoverFooter;
export interface PopoverFooterProps extends ChakraPopoverFooterProps {}

import { PopoverCloseButton as ChakraPopoverCloseButton } from "@chakra-ui/react";
import { PopoverCloseButtonProps as ChakraPopoverCloseButtonProps } from "@chakra-ui/react";

export const PopoverCloseButton = ChakraPopoverCloseButton;
export interface PopoverCloseButtonProps
  extends ChakraPopoverCloseButtonProps {}

import { PopoverAnchor as ChakraPopoverAnchor } from "@chakra-ui/react";

export const PopoverAnchor = ChakraPopoverAnchor;
