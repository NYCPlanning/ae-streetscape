import { useArgs } from "@storybook/preview-api";
import { useRef } from "react";
import { Slide } from ".";
import { Box, Text } from "../..";
import { Button } from "../Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Transitions/Slide",
  component: Slide,
  tags: ["autodocs"],
} satisfies Meta<typeof Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    in: false,
    direction: "bottom",
  },
  render: function Render(args) {
    const [{ in: slideIn }, updateArgs] = useArgs();
    const btnRef = useRef(null);
    return (
      <>
        <Button ref={btnRef} onClick={() => updateArgs({ in: !slideIn })}>
          Click Me
        </Button>
        <Slide style={{ zIndex: 10 }} {...args}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Text>Lorem ipsum odor amet, consectetuer adipiscing elit.</Text>
          </Box>
        </Slide>
      </>
    );
  },
};
