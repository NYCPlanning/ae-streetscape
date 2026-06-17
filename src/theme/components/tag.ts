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

const allGradeVariantContainers = {
  fontFamily: "Arial",
  fontWeight: 700,
  textAlign: "center",
  justifyContent: "center",
};

const variants = {
  base: {},
  gradeA: definePartsStyle({
    container: {
      ...allGradeVariantContainers,
      bg: "parkland.600",
      color: "white",
    },
  }),
  gradeB: definePartsStyle({
    container: {
      ...allGradeVariantContainers,
      bg: "metrocard.300",
      color: "metrocard.900",
    },
  }),
  gradeC: definePartsStyle({
    container: {
      ...allGradeVariantContainers,
      bg: "planning.100",
      color: "planning.800",
    },
  }),
  gradeD: definePartsStyle({
    container: {
      ...allGradeVariantContainers,
      bg: "planning.200",
      color: "planning.800",
    },
  }),
  gradeF: definePartsStyle({
    container: {
      ...allGradeVariantContainers,
      bg: "hydrant.600",
      color: "white",
    },
  }),
};

const sizes = {
  gradesSm: {
    container: {
      fontSize: "sm",
      width: "5",
      height: "5",
      minW: "5",
      minH: "5",
      borderRadius: "4px",
      px: 0,
    },
  },
  gradesLg: {
    container: {
      fontSize: "xl",
      width: "9",
      height: "9",
      minW: "9",
      minH: "9",
      borderRadius: "8px",
      px: 0,
    },
  },
  gradesDescription: {
    container: {
      fontSize: "2xs",
      height: "5",
      minH: "5",
      borderRadius: "10px",
      px: "1.5",
    },
  },
};

export const tagTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
});
