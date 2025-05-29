import type { Meta, StoryObj } from "@storybook/react";
import { chakra } from "@chakra-ui/system";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Select } from "./Select";
import { theme } from "../../theme";
import { userEvent, within } from "@storybook/test";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Select"),
    placeholder: { type: "string" },
    isCancellable: { table: { defaultValue: { summary: false } } },
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
  // Test for user click
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(/Placeholder Text/));
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

const children = [
  <option value={"Option 1"} key={"Option 1"}>
    This is a long option name to make sure that the ellipsis is working. This
    is a long option name to make sure that the ellipsis is working.
  </option>,
  <option value={"Option 2"} key={"Option 2"}>
    This is also a long option name to make sure that the ellipsis is working.
    This is also a long option name to make sure that the ellipsis is working.
  </option>,
];

export const Cancellable: Story = {
  args: {
    isCancellable: true,
    placeholder:
      "This component has extra space on the right for the inclusion of the cancel button, but only when a selection has been made. You should pass down the additional handleCancel property.",
    size: "md",
    variant: "base",
    textOverflow: "ellipsis",
    children,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    function handleChange(event?: React.ChangeEvent<HTMLSelectElement>) {
      updateArgs({ value: event?.target.value });
    }

    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => handleChange(e)}
        handleCancel={() => updateArgs({ value: "" })}
      >
        {args.children}
      </Select>
    );
  },
  // Test for user click
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(/This component has/));
  },
};
