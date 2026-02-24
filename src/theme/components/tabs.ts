import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyleRoot = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block",
    alignItems: "flex-start",
    alignSelf: "stretch",
  };
});

const baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;

  return {
    flex: isFitted ? 1 : undefined,
    transitionProperty: "common",
    transitionDuration: "normal",
    paddingX: 3,
    paddingY: 4,
    background: "white",
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontWeight: 500,
    fontSize: "sm",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4,
    },
    _selected: {
      color: "primary.700",
      fontWeight: 700,
      borderColor: "primary.600",
      borderBottom: "4px solid",
      paddingTop: 5,
    },
  };
});

const baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;

  const alignments: Record<string, string> = {
    end: "flex-end",
    center: "center",
    start: "flex-start",
  };

  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row",
    boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.08)",
  };
});

const baseStyleTabpanel = defineStyle({
  p: 4,
});

const baseStyle = definePartsStyle((props) => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel,
}));

const sizes = {
  md: {
    tab: {
      fontSize: "sm",
    },
  },
  sm: {
    tab: {
      fontSize: "xs",
    },
  },
};

const variants = {
  base: {},
  mapControl: definePartsStyle({
    root: {
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      borderRadius: "lg",
      backgroundColor: "white",
    },
    tab: {
      borderRadius: 0,
      boxShadow: 0,
      color: "gray.600",
      px: 4,
      py: 3,
      fontWeight: 400,
      borderRight: "1px solid",
      borderRightColor: "gray.300",
      _first: {
        borderLeftRadius: "lg",
      },
      _last: {
        borderRight: "none",
        borderRadius: "lg",
        _selected: {
          border: "1px solid",
        },
      },
      "button:has(+ &[aria-selected='true'])": {
        borderRight: 0,
      },
      _selected: {
        paddingTop: 3,
        color: "primary.600",
        backgroundColor: "primary.50",
        border: "1px solid",
        borderRadius: "lg",
        fontWeight: 400,
      },
    },
  }),
};

export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "base",
    size: "md",
  },
});
