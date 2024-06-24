import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { CloseButton } from "./CloseButton";
import { theme } from "../../theme";

const meta = {
  title: "Components/CloseButton",
  component: CloseButton,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "CloseButton"),
    children: { type: "string" },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
  },
};
