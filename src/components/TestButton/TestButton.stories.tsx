import type { Meta, StoryObj } from "@storybook/react";

import TestButton from "./TestButton";

const meta: Meta<typeof TestButton> = {
  component: TestButton,
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Basic: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/LYHHoPop9l0jpEivk5CFzJ/Capital-Projects-Portal?page-id=1276%3A32472&node-id=1276-32481&viewport=277%2C263%2C0.07&t=tnBhsQhkr8rHvU7e-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1276%3A32481",
    },
  },
};

// for the url, if you want to embed a specific frame, copy the link to that component
// to embed a prototype, go into presentation mode on figma and copy the share link from there
