import { Meta, StoryObj } from "@storybook/react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "./Table";
import { TableCaption, Tfoot } from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { theme } from "../../theme";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Table"),
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "simple",
    size: "md",
    colorScheme: "whiteAlpha",
  },
  render: function Render(args) {
    return (
      <TableContainer>
        <Table {...args}>
          <TableCaption>An example table</TableCaption>
          <Thead>
            <Tr>
              <Th>First column header</Th>
              <Th>Second column header</Th>
              <Th>Third column header</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>First body cell</Td>
              <Td>Second body cell</Td>
              <Td>Third body cell</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>First footer column</Th>
              <Th>Second footer column</Th>
              <Th>Third footer column</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
  },
};
