import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Card, CardBody, CardFooter, CardHeader } from "./Card";
import { Meta, StoryObj } from "@storybook/react";
import { theme } from "../../theme";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Card"),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "outline",
    size: "sm",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="primary">View summary</Button>
          <Button variant="secondary">View analysis</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ),
};
