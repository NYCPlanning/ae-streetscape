import type { Meta, StoryObj } from "@storybook/react";
import { chakra } from "@chakra-ui/system";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Select } from "./Select";
import { theme } from "../../theme";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Select"),
    placeholder: { type: "string" },
    isCancellable: { table: { defaultValue: { summary: true } } },
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
    placeholder:
      "By default, this component includes a cancel button, but only when a selection has been made. Clicking it will call the onChange function with an empty string, unless you pass a handleCancel function.",
    size: "md",
    variant: "base",
    value: "",
    children: [
      <option value={"Option 1"} key={"Option 1"}>
        Option 1
      </option>,
      <option value={"Option 2"} key={"Option 2"}>
        Option 2
      </option>,
    ],
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
      ></Select>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1585&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const Invalid: Story = {
  args: {
    ...Base.args,
    isInvalid: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1585&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    isDisabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yKCsuZxvSyAmdxaziIU2jS/Chakra-UI-Figma-Kit-for-DCP?node-id=441-1585&t=0imiNI8frfIDMA69-4",
    },
  },
};

export const NotCancellable: Story = {
  args: {
    ...Base.args,
    isCancellable: false,
    placeholder:
      "You can disable showing the cancel button by passing false to the isCancellable prop.",
  },
};
