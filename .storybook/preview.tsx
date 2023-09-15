import React from "react";
import type { Preview } from "@storybook/react";
import { ChakraBaseProvider } from "@chakra-ui/react";

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
      <ChakraBaseProvider theme={{}}>
        <Story />
      </ChakraBaseProvider>
    ),
  ],
};

export default preview;
