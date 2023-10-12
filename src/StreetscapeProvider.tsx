import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "./theme";

interface StreetscapeProviderProps {
  children: React.ReactNode;
}

export const StreetscapeProvider = ({ children }: StreetscapeProviderProps) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);
