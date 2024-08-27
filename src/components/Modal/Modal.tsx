import { Modal as ChakraModal } from "@chakra-ui/react";
import type { ModalProps as ChakraModalProps } from "@chakra-ui/react";

export const Modal = ChakraModal;
export interface ModalProps extends ChakraModalProps {}

import { ModalBody as ChakraModalBody } from "@chakra-ui/react";
export const ModalBody = ChakraModalBody;

import { ModalFooter as ChakraModalFooter } from "@chakra-ui/react";
import { ModalFooterProps as ChakraModalFooterProps } from "@chakra-ui/react";

export const ModalFooter = ChakraModalFooter;
export interface ModalFooterProps extends ChakraModalFooterProps {}

import { ModalHeader as ChakraModalHeader } from "@chakra-ui/react";
import { ModalHeaderProps as ChakraModalHeaderProps } from "@chakra-ui/react";

export const ModalHeader = ChakraModalHeader;
export interface ModalHeaderProps extends ChakraModalHeaderProps {}

import { ModalOverlay as ChakraModalOverlay } from "@chakra-ui/react";
import { ModalOverlayProps as ChakraModalOverlayProps } from "@chakra-ui/react";

export const ModalOverlay = ChakraModalOverlay;
export interface ModalOverlayProps extends ChakraModalOverlayProps {}

import { ModalContent as ChakraModalContent } from "@chakra-ui/react";
import { ModalContentProps as ChakraModalContentProps } from "@chakra-ui/react";

export const ModalContent = ChakraModalContent;
export interface ModalContentProps extends ChakraModalContentProps {}

import { ModalCloseButton as ChakraModalCloseButton } from "@chakra-ui/react";
export const ModalCloseButton = ChakraModalCloseButton;
