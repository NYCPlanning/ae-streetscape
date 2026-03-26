import { comboboxAnatomy } from "@ark-ui/react/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { inputTheme } from "./input";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(comboboxAnatomy.keys());

const baseStyleRoot = defineStyle({
  borderRadius: "md",
  display: "flex",
  flexDir: "column",
  gap: 1,
});

const baseStyleControl = defineStyle({
  display: "flex",
  width: "100%",
  position: "relative",
  isolation: "isolate",
  alignItems: "center",
  borderRadius: "md",
});

const baseStyleInput = defineStyle({
  field: {
    ...inputTheme.baseStyle?.field,
    paddingInlineStart: 8,
    fontFamily: "Helvetica, Arial, san-serif",
    fontSize: "0.875rem",
    borderRadius: "md",
    // outlineColor is required to set the color of the border when focused
    outlineColor: "primary.600",
    _hover: {
      // Hover color outline can be set separately
      borderColor: "gray.600",
    },
    _focus: {
      // This is only necessary if setting a separate color for hover
      borderColor: "primary.600",
    },
  },
});

const baseStyleClearTrigger = defineStyle({
  display: "flex",
  width: 6,
  height: 6,
  padding: 1.5,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  position: "absolute",
  right: 1.5,
  zIndex: 2,
  bg: "#FFFFFF",
  _before: {
    content: '""',
    position: "absolute",
    top: 0,
    right: "100%",
    width: "24px",
    height: "100%",
    pointerEvents: "none",
    bgGradient: "linear(to-r, #ffffff00, #ffffff)",
  },
});

const baseStyleContent = defineStyle({
  borderRadius: "md",
  paddingY: 2,
  paddingLeft: 3,
  paddingRight: 1.5,
  color: "gray.700",
  boxShadow:
    "0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)",
});

const baseStyleItem = defineStyle({
  display: "flex",
  padding: 2,
  alignItems: "center",
  borderRadius: "lg",
  cursor: "pointer",
  _hover: {
    bgColor: "gray.100",
  },
  _focus: {
    bgColor: "gray.100",
  },
  _highlighted: {
    bgColor: "gray.100",
  },
  // _checked does not work
  '&[data-state="checked"]': {
    cursor: "unset",
    color: "white",
    bgColor: "primary.600",
  },
});

const baseStyleItemText = defineStyle({
  fontSize: "xs",
});

const baseStyle = definePartsStyle({
  root: baseStyleRoot,
  input: baseStyleInput,
  control: baseStyleControl,
  clearTrigger: baseStyleClearTrigger,
  content: baseStyleContent,
  item: baseStyleItem,
  itemText: baseStyleItemText,
});

export const comboboxTheme = defineMultiStyleConfig({
  baseStyle,
});
