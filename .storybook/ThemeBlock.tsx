import React from "react";
import { Unstyled } from "@storybook/blocks";
import { StreetscapeProvider } from "../src/StreetscapeProvider";

interface ThemeBlockProps {
  children: React.ReactNode;
}

export const ThemeBlock = ({ children }: ThemeBlockProps) => (
  <Unstyled>
    <StreetscapeProvider>{children}</StreetscapeProvider>
  </Unstyled>
);
