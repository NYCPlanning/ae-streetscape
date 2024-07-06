import type { Meta, StoryObj } from "@storybook/react";

//import { action } from '@storybook/addon-actions';

import TestButton from "./TestButton";

const meta: Meta<typeof TestButton> = {
  component: TestButton,
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Basic: Story = {
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/LYHHoPop9l0jpEivk5CFzJ/Capital-Projects-Portal?node-id=1187-31505&t=pWqnOiKXpIR0NFnL-4",
    },
  },
};
