import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    borderRadius: "base",
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
      backgroundColor: "primary.600",
      color: "white",
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
        backgroundColor: "primary.500",
        border: "none",
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.08) inset, 0px -4px 4px 0px rgba(0, 0, 0, 0.08) inset, 4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset, -4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset;",
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
        background: "rgba(43, 119, 120, 0.04)",
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.08) inset, 0px -4px 4px 0px rgba(0, 0, 0, 0.08) inset, 4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset, -4px 0px 4px 0px rgba(0, 0, 0, 0.08) inset",
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
