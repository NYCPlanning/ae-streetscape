import { alertAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  cssVar,
} from "@chakra-ui/react";
import { alertTheme as chakraAlertTheme } from "@chakra-ui/theme/components/alert";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const $fg = cssVar("alert-fg");
const $bg = cssVar("alert-bg");

const outlineStyleContainer = defineStyle({
  ...chakraAlertTheme.baseStyle?.container,
  [$fg.variable]: `colors.gray.600`,
  [$bg.variable]: `colors.white`,
  border: "1px solid",
  borderColor: "primary.500",
  borderRadius: "0.25rem",
  alignItems: "flex-start",
  width: "369px",
  minWidth: "369px",
  '&[data-status="error"]': {
    borderColor: "state.error",
  },
  '&[data-status="success"]': {
    borderColor: "state.success",
  },
  '&[data-status="loading"]': {
    borderColor: "state.warning",
  },
});
const outlineStyleTitle = defineStyle({
  ...chakraAlertTheme.baseStyle?.title,
  color: "gray.600",
  fontSize: "md",
  lineHeight: "1.5rem",
});

const outlineStyleDescription = defineStyle({
  ...chakraAlertTheme.baseStyle?.description,
  color: "gray.600",
  fontSize: "sm",
  lineHeight: "1.5rem",
});

const outlineStyleIcon = defineStyle({
  ...chakraAlertTheme.baseStyle?.icon,
  color: "primary.500",
  marginTop: 1,
  height: 5,
  width: 5,
  '&[data-status="error"]': {
    color: "state.error",
  },
  '&[data-status="success"]': {
    color: "state.success",
  },
});

const outlineStyleSpinner = defineStyle({
  ...chakraAlertTheme.baseStyle?.spinner,
  color: "primary.500",
});

const outlineStyle = definePartsStyle({
  container: outlineStyleContainer,
  title: outlineStyleTitle,
  description: outlineStyleDescription,
  icon: outlineStyleIcon,
  spinner: outlineStyleSpinner,
});

export const alertTheme = defineMultiStyleConfig({
  variants: {
    outline: outlineStyle,
  },
});
