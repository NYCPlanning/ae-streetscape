import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  color: "gray.600",
  fontSize: "md",
  fontFamily: "heading",
  fontWeight: 500,
  lineHeight: "regular",
  paddingBottom: 2,
  _disabled: {
    color: "gray.400",
  },
});

export const formLabelTheme = defineStyleConfig({
  baseStyle,
});
