import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "@chakra-ui/icons";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Tooltip } from "./Tooltip";
import { theme } from "../../theme";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Tooltip"),
    children: { type: "string" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <InfoIcon />,
    label: "Tooltip text",
  },
};

export const WithArrow: Story = {
  args: {
    children: <InfoIcon />,
    label: "Tooltip text",
    hasArrow: true,
    placement: "right",
  },
};
