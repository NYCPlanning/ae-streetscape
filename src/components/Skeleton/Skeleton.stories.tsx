import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Skeleton } from "./Skeleton";
import { theme } from "../../theme";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Skeleton"),
    children: { type: "string" },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: function Render(args) {
    return (
      <Skeleton {...args}>
        <div>contents wrapped</div>
        <div>will not be visible</div>
      </Skeleton>
    );
  },
};
