import { cardTheme as chakraCardTheme } from "@chakra-ui/theme/components/card";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  ...chakraCardTheme?.variants,
  calm: definePartsStyle({
    ...chakraCardTheme?.variants?.unstyled,
    container: {
      padding: 3,
      borderRadius: "lg",
      backgroundColor: "gray.50",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({
  ...chakraCardTheme,
  variants,
});
