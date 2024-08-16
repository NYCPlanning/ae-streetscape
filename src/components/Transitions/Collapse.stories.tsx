import { useArgs } from "@storybook/preview-api";
import { useRef } from "react";
import { Collapse } from ".";
import { Box, Text } from "../..";
import { Button } from "../Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Transitions/Collapse",
  component: Collapse,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    in: false,
  },
  render: function Render(args) {
    const [{ in: collapseIn }, updateArgs] = useArgs();
    const btnRef = useRef(null);
    return (
      <>
        <Button ref={btnRef} onClick={() => updateArgs({ in: !collapseIn })}>
          Click Me
        </Button>
        <Collapse {...args}>
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
        </Collapse>
      </>
    );
  },
};
