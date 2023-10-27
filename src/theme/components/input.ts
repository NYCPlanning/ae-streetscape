import { defineStyleConfig } from "@chakra-ui/react";

export const inputTheme = defineStyleConfig({
  baseStyle: {
    field: {
      background: "black",
      border: "1px solid",
      borderColor: "gray.400",
      borderRadius: "base",
      color: "gray.600",
      _hover: {
        borderColor: "brand.800",
      },
      // TOKEN
      padding: "8px 12px",
    },
  },
  sizes: {
    sm: {
      field: {
        height: 8,
      },
    },
    md: {
      field: {
        height: 10,
      },
    },
    lg: {
      field: {
        height: 12,
      },
    },
  },
  variants: {
    base: {},
  },
});
