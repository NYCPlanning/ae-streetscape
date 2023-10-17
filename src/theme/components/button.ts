import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    backgroundColor: "primary.600",
    borderRadius: "base",
    color: "white",
    px: 6,
    py: 3,
  },
  sizes: {
    sm: {
      fontSize: "sm",
    },
    md: {
      fontSize: "md",
    },
    lg: {
      fontSize: "lg",
    },
  },
  variants: {
    primary: {
      // TODO: Refactor setting boxShadow tokens
      boxShadow: "0 1.5 1.5 0 rgba(35, 78, 82, 0.08)",
      _disabled: {
        backgroundColor: "primary.500",
        color: "white",
        opacity: 0.64,
        pointerEvents: "none",
      },
      _hover: {
        backgroundColor: "brand.50",
        border: "1px solid",
        borderColor: "brand.800",
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "medium",
      },
      _active: {
        boxShadow: "0 .25 .25 0 rgba(0, 0, 0, 0.08)",
        color: "white",
        fontWeight: "medium",
        textDecorationLine: "underline",
      },
    },
    secondary: {
      backgroundColor: "white",
      border: "2px solid",
      borderColor: "primary.600",
      boxShadow: "0 1.5 1.5 0 rgba(44, 122, 123, 0.04)",
      color: "gray.700",
      _disabled: {
        backgroundColor: "gray.50",
        border: "2px solid",
        borderColor: "primary.600",
        color: "gray.700",
        opacity: 0.64,
        pointerEvents: "none",
      },
      _hover: {
        backgroundColor: "white",
        border: "2px solid",
        borderColor: "brand.800",
        boxShadow: "0 1 1.5 0 rgba(217, 107, 39, 0.18)",
        color: "gray.700",
        fontWeight: "medium",
      },
      _active: {
        boxShadow: "0 .25 .25 0 rgba(0, 0, 0, 0.08)",
        color: "gray.700",
        fontWeight: "medium",
        textDecorationLine: "underline",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});
