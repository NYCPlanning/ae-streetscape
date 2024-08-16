import { useArgs } from "@storybook/preview-api";
import { useRef } from "react";
import { ScaleFade } from ".";
import { Box } from "../..";
import { Button } from "../Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Transitions/ScaleFade",
  component: ScaleFade,
  tags: ["autodocs"],
} satisfies Meta<typeof ScaleFade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    in: false,
    initialScale: 0.9,
  },
  render: function Render(args) {
    const [{ in: scaleFadeIn }, updateArgs] = useArgs();
    const btnRef = useRef(null);
    return (
      <>
        <Button ref={btnRef} onClick={() => updateArgs({ in: !scaleFadeIn })}>
          Click Me
        </Button>
        <ScaleFade {...args}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            ScaleFade
          </Box>
        </ScaleFade>
      </>
    );
  },
};
