import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyleControl = defineStyle(() => {
  return {
    borderRadius: "2px", // change the border radius of the control
    border: "2px solid",
    borderColor: "gray.700",
    flexShrink: 0,
    backgroundColor: "white",
    color: "white",
    gap: "10px",
    _checked: {
      padding: "2px",
      borderColor: "primary.500",
      backgroundColor: "primary.500",
    },
    _hover: {
      padding: "2px",
      borderColor: "brand.800",
      backgroundColor: "brand.800",
      color: "white",
    },
    _disabled: {
      backgroundColor: "gray.300",
      borderColor: "gray.400",
      color: "gray.400",
    },
  };
});

const baseStyleContainer = defineStyle({
  // _disabled: { cursor: "not-allowed" },
});

const baseStyleLabel = defineStyle({
  // userSelect: "none",
  // _disabled: { opacity: 0.4 },
});

const baseStyleIcon = defineStyle({
  // transitionProperty: "transform",
  // transitionDuration: "normal",
});

// Combine the 4 components of the checkbox
const baseStyle = definePartsStyle(() => ({
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: baseStyleControl(),
  label: baseStyleLabel,
}));

const sizes = {
  sm: definePartsStyle({
    control: { boxSize: "24px" }, // this value includes the border, making it a 20px box with a 2px border
    label: { fontSize: "sm" },
  }),
  md: definePartsStyle({
    control: { boxSize: "28px" }, // this value includes the border, making it a 24px box with a 2px border
    label: { fontSize: "md" },
  }),
};

const variants = {
  base: {},
};

const defaultProps = {};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
