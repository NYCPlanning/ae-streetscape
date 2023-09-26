import React from "react";
import { Unstyled } from "@storybook/blocks";
import { ThemeProvider } from "../src/ThemeProvider";

interface ThemeBlockProps {
  children: React.ReactNode;
}

export const ThemeBlock = ({ children }: ThemeBlockProps) => (
  <Unstyled>
    <ThemeProvider>{children}</ThemeProvider>
  </Unstyled>
);
