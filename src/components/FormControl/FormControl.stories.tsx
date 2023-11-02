import type { Meta, StoryObj } from "@storybook/react";
import { chakra } from "@chakra-ui/system";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { FormControl } from "./FormControl";
import { FormErrorMessage } from "./FormErrorMessage";
import { FormLabel } from "./FormLabel";
import { Input } from "../Input";
import { Select as FormControlSelect } from "../Select";
import { theme } from "../../theme";

const meta = {
  title: "Components/Form Control",
  component: FormControl,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "FormControl"),
  },
  decorators: [
    // Because <Input> defaults to 100% width, wrap stories in div with max width.
    (Story) => <chakra.div maxW="560px">{Story()}</chakra.div>,
  ],
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isRequired: false,
    isInvalid: false,
  },
  render: (args) => (
    <FormControl id="input-component" {...args}>
      <FormLabel>Input Label</FormLabel>
      <Input placeholder="Placeholder Text" />
      <FormErrorMessage>This is an error message.</FormErrorMessage>
    </FormControl>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isRequired: false,
  },
  render: (args) => (
    <FormControl id="input-component" {...args}>
      <FormLabel>Input Label</FormLabel>
      <Input placeholder="Placeholder Text" />
      <FormErrorMessage>This is an error message.</FormErrorMessage>
    </FormControl>
  ),
};

export const Error: Story = {
  args: {
    isInvalid: true,
  },
  render: (args) => (
    <FormControl id="input-component" {...args}>
      <FormLabel>Input Label</FormLabel>
      <Input placeholder="Placeholder Text" />
      <FormErrorMessage>This is an error message.</FormErrorMessage>
    </FormControl>
  ),
};

export const Select: Story = {
  args: {
    isRequired: false,
    isInvalid: false,
  },
  render: (args) => (
    <FormControl
      id="select-component"
      // Props should reference args, otherwise changes to StoryBook controls will not be reflected
      isRequired={args.isRequired}
      isInvalid={args.isInvalid}
    >
      <FormLabel>Select Label</FormLabel>
      <FormControlSelect placeholder="Placeholder Text">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </FormControlSelect>
      <FormErrorMessage>This is an error message.</FormErrorMessage>
    </FormControl>
  ),
};
