import type { Meta, StoryObj } from "@storybook/react";
import { chakra } from "@chakra-ui/system";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Select } from "./Select";
import { theme } from "../../theme";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Select"),
    placeholder: { type: "string" },
  },
  decorators: [
    // Because <Select> defaults to 100% width, wrap stories in div with max width.
    (Story) => <chakra.div maxW="560px">{Story()}</chakra.div>,
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: "Placeholder Text",
    size: "md",
    variant: "base",
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Placeholder Text",
    size: "md",
    variant: "base",
    isInvalid: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Placeholder Text",
    size: "md",
    variant: "base",
    isDisabled: true,
  },
};
