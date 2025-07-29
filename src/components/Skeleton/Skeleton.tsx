import {
  Skeleton as ChakraSkeleton,
  SkeletonCircle as ChakraSkeletonCircle,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";
import {
  SkeletonProps as ChakraSkeletonProps,
  SkeletonTextProps as ChakraSkeletonTextProps,
} from "@chakra-ui/react";

export const Skeleton = ChakraSkeleton;
export interface SkeletonProps extends ChakraSkeletonProps {}

export const SkeletonCircle = ChakraSkeletonCircle;
export interface SkeletonCircleProps extends ChakraSkeletonProps {}

export const SkeletonText = ChakraSkeletonText;
export interface SkeletonTextProps extends ChakraSkeletonTextProps {}
