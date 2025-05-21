import type { Meta, StoryObj } from "@storybook/react";
import { chakra } from "@chakra-ui/system";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { CancellableSelect } from "./CancellableSelect";
import { theme } from "../../theme";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/Cancellable Select",
  component: CancellableSelect,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "CancellableSelect"),
    placeholder: { type: "string" },
  },
  decorators: [
    // Because <CancellableSelect> defaults to 100% width, wrap stories in div with max width.
    (Story) => <chakra.div maxW="560px">{Story()}</chakra.div>,
  ],
} satisfies Meta<typeof CancellableSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Base: Story = {
  args: {
    placeholder:
      "This component has extra space on the right for the inclusion of the cancel button, but only when a selection has been made. You should pass down the additional handleCancel property.",
    size: "md",
    variant: "base",
    textOverflow: "ellipsis",
    handleCancel: () => window.alert("cancelled!"),
    onChange: () =>
      window.alert(
        "The value is set to the `selectValue` you pass to the component, and cannot be changed in the Story.  In usage, pass functions that update the `selectValue` to `onChange` and `handleCancel`.",
      ),
    children,
  },
  // Test for user click
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(/This component has/));
  },
};

export const BaseWithSelection: Story = {
  args: {
    placeholder:
      "This component has extra space on the right for the inclusion of the cancel button, but only when a selection has been made. You should pass down the additional handleCancel property.",
    size: "md",
    variant: "base",
    textOverflow: "ellipsis",
    selectValue: "Option 1",
    handleCancel: () => window.alert("cancelled!"),
    onChange: () =>
      window.alert(
        "The value is set to the `selectValue` you pass to the component, and cannot be changed in the Story.  In usage, pass functions that update the `selectValue` to `onChange` and `handleCancel`.",
      ),
    children,
  },
};
