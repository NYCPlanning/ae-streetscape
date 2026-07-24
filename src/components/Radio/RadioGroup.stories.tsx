import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "./Radio";

const meta = {
  title: "Components/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: (
      <Stack>
        <Radio value="Option 1">Option 1</Radio>
        <Radio value="Option 2">Option 2</Radio>
        <Radio value="Option 3">Option 3</Radio>
      </Stack>
    ),
  },
  render: function Render(args) {
    const [value, setValue] = useState<string | undefined>();

    return (
      <RadioGroup onChange={setValue} value={value}>
        {args.children}
      </RadioGroup>
    );
  },
};
