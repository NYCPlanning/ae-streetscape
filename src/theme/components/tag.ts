import { tagTheme as chakraTagTheme } from "@chakra-ui/theme/components/tag";
import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  ...chakraTagTheme.baseStyle,
  container: {
    ...chakraTagTheme.baseStyle?.container,
    bg: "gray.100",
    color: "gray.600",
    minH: 6,
    px: 2,
    fontWeight: 400,
    fontSize: "sm",
  },
});

export const tagTheme = defineMultiStyleConfig({ baseStyle });
