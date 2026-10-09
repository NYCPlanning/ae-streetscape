import { defineStyleConfig } from "@chakra-ui/react";
import { closeButtonTheme as chakraCloseButtonTheme } from "@chakra-ui/theme/components/close-button";

export const closeButtonTheme = defineStyleConfig({
  ...chakraCloseButtonTheme,
  baseStyle: {
    ...chakraCloseButtonTheme.baseStyle,
    _focusVisible: {
      ...chakraCloseButtonTheme.baseStyle?._focusVisible,
      outline: "2px solid",
      outlineColor: "state.focus",
      outlineOffset: "2px",
    },
  },
});
