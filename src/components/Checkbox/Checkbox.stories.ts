import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Checkbox } from "./Checkbox";
import { theme } from "../../theme";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Checkbox"),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "base",
    size: "md",
    isChecked: false,
  },
};
