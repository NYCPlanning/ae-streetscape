import { Radio as ChakraRadio } from "@chakra-ui/react";
import type {
  RadioProps as ChakraRadioProps,
  SystemStyleObject,
} from "@chakra-ui/react";

export const ChakraDefaultRadio = ChakraRadio;
export interface ChakraDefaultRadioProps extends ChakraRadioProps {}

import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";
import type { RadioGroupProps as ChakraRadioGroupProps } from "@chakra-ui/react";

export const RadioGroup = ChakraRadioGroup;
export interface RadioGroupProps extends ChakraRadioGroupProps {}

import React from "react";
import {
  Box,
  useMultiStyleConfig,
  useRadio as chakraUseRadio,
  useRadioGroup as chakraUseRadioGroup,
  useRadioGroupContext as chakraUseRadioGroupContext,
} from "@chakra-ui/react";
import type {
  UseRadioProps as ChakraUseRadioProps,
  UseRadioReturn as ChakraUseRadioReturn,
} from "@chakra-ui/react";

export const useRadio = chakraUseRadio;
export const useRadioGroup = chakraUseRadioGroup;
export const useRadioGroupContext = chakraUseRadioGroupContext;
export interface UseRadioProps extends ChakraUseRadioProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
export interface UseRadioReturn extends ChakraUseRadioReturn {}
export interface UseRadioContainerProps extends UseRadioProps {
  styles: Record<string, SystemStyleObject>;
}
export interface UseRadioControlProps {
  styles: Record<string, SystemStyleObject>;
  children: React.ReactNode;
  checkbox: UseRadioReturn["getRadioProps"]["arguments"];
}
export interface UseRadioDotProps {
  styles: Record<string, SystemStyleObject>;
  isChecked: boolean;
}

export function RadioContainer(props: UseRadioContainerProps) {
  const {
    state: { isDisabled },
  } = useRadio(props);
  return (
    <Box
      as="label"
      cursor={isDisabled ? "not-allowed" : "pointer"}
      __css={props.styles.container}
    >
      {props.children}
    </Box>
  );
}

export function RadioControl({
  styles,
  children,
  checkbox,
}: UseRadioControlProps) {
  return (
    <Box {...checkbox} __css={styles.control}>
      {children}
    </Box>
  );
}

export function RadioDot({ isChecked, styles }: UseRadioDotProps) {
  return (
    <Box
      className="inner-dot"
      transform={isChecked ? "scale(1)" : "scale(0)"}
      __css={styles.dot}
    />
  );
}

export function Radio(props: UseRadioProps) {
  const { size, value, children, ...restProps } = props;
  const group = useRadioGroupContext();

  const isChecked = group.value === value;
  const isDisabled = group?.isDisabled || props.isDisabled;
  const onChange = group?.onChange;

  const { getInputProps, getRadioProps } = useRadio({
    value,
    isChecked,
    onChange,
    name: group?.name,
    ...restProps,
  });

  const input = getInputProps();
  const checkbox = getRadioProps();

  const styles = useMultiStyleConfig("Radio", { size });

  return (
    <RadioContainer styles={styles}>
      {/* Hidden native input, necessary for accessibility */}
      <input {...input} />

      {/* 2. Radio Ring */}
      <RadioControl styles={styles} checkbox={checkbox}>
        {/* Inner Dot (Appears when checked) */}
        <RadioDot styles={styles} isChecked={isChecked} />
      </RadioControl>

      {/* Label */}
      <Box
        ml={2}
        color={isDisabled ? "gray.500" : "inherit"}
        __css={styles.label}
      >
        {children}
      </Box>
    </RadioContainer>
  );
}
