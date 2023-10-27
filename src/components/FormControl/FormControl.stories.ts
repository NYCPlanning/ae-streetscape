import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { FormControl } from "./FormControl";
import { theme } from "../../theme";

const meta = {
  title: "Components/Form Control",
  component: FormControl,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "FormControl"),
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isRequired: true,
    isInvalid: false,
  },
};
