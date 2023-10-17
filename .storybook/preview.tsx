import React from "react";
import type { Preview } from "@storybook/react";
import { StreetscapeProvider } from "../src/StreetscapeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StreetscapeProvider>
        <Story />
      </StreetscapeProvider>
    ),
  ],
};

export default preview;
