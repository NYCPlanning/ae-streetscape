import { useArgs } from "@storybook/preview-api";
import { useRef } from "react";
import { Fade } from ".";
import { Box } from "../..";
import { Button } from "../Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Transitions/Fade",
  component: Fade,
  tags: ["autodocs"],
} satisfies Meta<typeof Fade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    in: false,
  },
  render: function Render(args) {
    const [{ in: fadeIn }, updateArgs] = useArgs();
    const btnRef = useRef(null);
    return (
      <>
        <Button ref={btnRef} onClick={() => updateArgs({ in: !fadeIn })}>
          Click Me
        </Button>
        <Fade {...args}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            Fade
          </Box>
        </Fade>
      </>
    );
  },
};
