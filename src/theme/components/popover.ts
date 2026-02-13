import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { popoverTheme as chakraPopoverTheme } from "@chakra-ui/theme/components/popover";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleContent = defineStyle({
  ...chakraPopoverTheme.baseStyle?.content,
  border: "1px solid",
  borderColor: "#CBD5E0",
  borderRadius: "4px",
  background: "white",
  padding: 5,
  boxShadow:
    "0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.10)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "20px",
  width: "300px",
});

const baseStyleHeader = defineStyle({
  ...chakraPopoverTheme.baseStyle?.header,
  borderColor: "#CBD5E0",
  color: "gray.700",
  fontWeight: "bold",
  fontSize: "sm",
  alignSelf: "flex-start",
  paddingBottom: 1.5,
  paddingLeft: 0,
});

const baseStyleBody = defineStyle({
  ...chakraPopoverTheme.baseStyle?.body,
  fontSize: "sm",
  color: "#4A5568",
  padding: 0,
});

const baseStyleFooter = defineStyle({
  ...chakraPopoverTheme.baseStyle?.footer,
  borderTop: "1px solid #CBD5E0",
  padding: 0,
  display: "flex",
  alignSelf: "stretch",
  alignItems: "center",
  alignContent: "center",
  gap: "12px",
  justifyContent: "space-between",
});

const baseStyleCloseButton = defineStyle({
  ...chakraPopoverTheme.baseStyle?.closeButton,
  position: "absolute",
  top: "7",
  right: "5",
});

const baseStyle = definePartsStyle({
  content: baseStyleContent,
  header: baseStyleHeader,
  body: baseStyleBody,
  closeButton: baseStyleCloseButton,
  footer: baseStyleFooter,
});

export const popoverTheme = defineMultiStyleConfig({
  baseStyle,
});
