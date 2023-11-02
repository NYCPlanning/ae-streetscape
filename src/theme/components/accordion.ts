import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { accordionTheme as chakraAccordionTheme } from "@chakra-ui/theme/components/accordion";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleContainer = defineStyle({
  ...chakraAccordionTheme.baseStyle?.container,
  borderColor: "gray.200",
});

const baseStyleButton = defineStyle({
  ...chakraAccordionTheme.baseStyle?.button,
  _hover: {
    ...chakraAccordionTheme.baseStyle?.button._hover,
    bg: "gray.50",
  },
});

const baseStylePanel = defineStyle({
  ...chakraAccordionTheme.baseStyle?.panel,
});

const baseStyleIcon = defineStyle({
  ...chakraAccordionTheme.baseStyle?.icon,
});

const baseStyle = definePartsStyle({
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon,
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
