import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);
