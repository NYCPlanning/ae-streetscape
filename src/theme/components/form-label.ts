import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  color: "gray.600",
  fontSize: "md",
  fontFamily: "heading",
  fontWeight: 500,
  lineHeight: "regular",
});

export const formLabelTheme = defineStyleConfig({
  baseStyle,
});
