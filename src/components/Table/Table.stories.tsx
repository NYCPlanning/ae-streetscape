import { Meta, StoryObj } from "@storybook/react";
import { Table, Td, Th, Thead, Tr } from "./Table";
import { chakra } from "@chakra-ui/system";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(Story) => <chakra.div maxW="560px">{Story()}</chakra.div>],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => (
    <Table>
      <Thead>
        <Tr>
          <Th>First Column Header</Th>
          <Th>Second Column Header</Th>
          <Th>Third Column Header</Th>
        </Tr>
      </Thead>
    </Table>
  ),
};
