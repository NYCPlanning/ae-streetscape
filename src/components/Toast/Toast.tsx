import { useToast as useChakraToast } from "@chakra-ui/react";
import type { UseToastOptions as UseChakraToastOptions } from "@chakra-ui/react";

export interface UseToastOptions extends UseChakraToastOptions {}

export function useToast(options?: UseToastOptions) {
  return useChakraToast({
    ...options,
    variant: "outline",
    containerStyle: {
      ...options?.containerStyle,
      boxShadow:
        "0 3px 6px -3px rgba(0, 0, 0, 0.07), 0 1px 4px -3px rgba(0, 0, 0, 0.08)",
      borderRadius: "0.375rem",
    },
  });
}
