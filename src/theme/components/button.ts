import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    backgroundColor: "primary.600",
    borderRadius: "base",
    // token?
    color: "white",
    px: 6,
    py: 3,
  },
  sizes: {
    sm: {
      height: 11,
    },
    md: {
      height: 12,
    },
    lg: {
      height: 14,
    },
  },
  variants: {
    primary: {
      // token?
      boxShadow: "0 1.5 1.5 0 rgba(35, 78, 82, 0.08)",
      _disabled: {
        backgroundColor: "primary.500",
        color: "white",
        // token?
        opacity: 0.64,
      },
      _hover: {
        backgroundColor: "brand.50",
        // token?
        border: "1px solid",
        borderColor: "brand.800",
        // token?
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "500",
      },
      _active: {
        color: "white",
        fontWeight: "500",
        textDecorationLine: "underline",
      },
    },
    secondary: {
      backgroundColor: "white",
      // token?
      border: "2px solid",
      borderColor: "primary.600",
      // token?
      boxShadow: "0 1.5 1.5 0 rgba(44, 122, 123, 0.04)",
      color: "gray.70",
      _disabled: {
        backgroundColor: "gray.50",
        // token?
        border: "2px solid",
        borderColor: "primary.600",
        color: "gray.700",
        // token?
        opacity: 0.64,
      },
      _hover: {
        backgroundColor: "white",
        // token?
        border: "2px solid",
        borderColor: "brand.800",
        // token?
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "500",
      },
      _active: {
        color: "gray.700",
        fontWeight: "500",
        textDecorationLine: "underline",
      },
    },
  },
  defaultProps: {},
});
