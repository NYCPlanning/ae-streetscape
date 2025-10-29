import { cardTheme as chakraCardTheme } from "@chakra-ui/theme/components/card";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  ...chakraCardTheme?.variants,
  calm: definePartsStyle({
    container: {
      padding: "0.75rem",
      borderRadius: "0.5rem",
      backgroundColor: "gray.50",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({
  ...chakraCardTheme,
  variants,
});
