import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonGroup } from "../Button";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "./Popover";
import { theme } from "../../theme";
import { Box, Text } from "@chakra-ui/layout";
import { ChevronDownIcon } from "../Icon/Icon";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Popover"),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger>
          <Button
            variant={"secondary"}
            className={"foobar"}
            width={"119px"}
            height={"28px"}
            display={"flex"}
            justifyContent={"center"}
            gap={"4px"}
            border={"1px solid #CBD5E0"}
            boxShadow={"0 6px 6px 0 rgba(44, 122, 123, 0.04)"}
          >
            Trigger <span></span> <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Box
            borderBottom={"1px solid #CBD5E0"}
            width={"100%"}
            fontSize={"0.875rem"}
          >
            <PopoverCloseButton />
            <PopoverHeader>Popover - Title</PopoverHeader>
          </Box>
          <Text
            textAlign={"left"}
            width={"100%"}
            fontSize={"sm"}
            fontWeight={"bold"}
          >
            This is the subtitle (optional)
          </Text>
          <PopoverBody>
            This is the content. Provides additional information, options, or
            actions.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  },
};

export const BaseWithFooter: Story = {
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger>
          <Button
            variant={"secondary"}
            fontSize={"sm"}
            width={"119px"}
            height={"28px"}
            display={"flex"}
            justifyContent={"center"}
            gap={"4px"}
            border={"1px solid #CBD5E0"}
            boxShadow={"0 6px 6px 0 rgba(44, 122, 123, 0.04)"}
          >
            Trigger <span></span> <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent width={"412px"}>
          <Box
            borderBottom={"1px solid #CBD5E0"}
            width={"100%"}
            fontSize={"0.875rem"}
          >
            <PopoverCloseButton />
            <PopoverHeader>Popover - Title</PopoverHeader>
          </Box>
          <Text
            textAlign={"left"}
            width={"100%"}
            fontSize={"sm"}
            fontWeight={"bold"}
          >
            This is the subtitle (optional)
          </Text>
          <PopoverBody>
            This is the content. Provides additional information, options, or
            actions.
          </PopoverBody>
          <PopoverFooter
            display={"inline-grid"}
            gridTemplateColumns={"repeat(4, 1fr)"}
            width={"100%"}
          >
            <ButtonGroup
              display={"flex"}
              justifyContent={"flex-end"}
              width={"100%"}
              gridColumn={"2 / span 3"}
              paddingTop={3}
            >
              <Button
                variant={"tertiary"}
                fontSize={"sm"}
                width={"100%"}
                height={"32px"}
              >
                Tertiary
              </Button>
              <Button
                variant={"primary"}
                fontSize={"sm"}
                width={"100%"}
                height={"32px"}
              >
                Primary
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    );
  },
};
