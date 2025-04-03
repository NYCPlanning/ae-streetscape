import type { Meta, StoryObj } from "@storybook/react";
import { chakra } from "@chakra-ui/system";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { NumberInput } from "./Number-Input";
import { NumberInputField } from "./Number-Input-Field";
import { NumberInputStepper } from "./Number-Input-Stepper";
import { NumberIncrementStepper } from "./Number-Increment-Stepper";
import { NumberDecrementStepper } from "./Number-Decrement-Stepper";
import { theme } from "../../theme";

const meta = {
  title: "Components/Number Input",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "NumberInput"),
    placeholder: { type: "string" },
  },
  decorators: [
    // Because <NumberInput> defaults to 100% width, wrap stories in div with max width.
    (Story) => <chakra.div maxW="160px">{Story()}</chakra.div>,
  ],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <NumberInput id="number-input" {...args}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  ),
};

export const Invalid: Story = {
  ...Base,
  args: {
    ...Base.args,
    isInvalid: true,
  },
};

export const Disabled: Story = {
  ...Base,
  args: {
    ...Base.args,
    isDisabled: true,
  },
};

export const WithoutStepper: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <NumberInput id="number-input" {...args}>
      <NumberInputField />
    </NumberInput>
  ),
};
