import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Tag } from "./Tag";
import { theme } from "../../theme";
import { HStack, VStack } from "@chakra-ui/layout";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Tag"),
    children: { type: "string" },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Tag text",
  },
};

export const Grades: Story = {
  render: function Render() {
    return (
      <VStack gap={3} alignItems={"flex-start"}>
        <HStack gap={3}>
          <Tag variant={"gradeA"} size={"gradesSm"}>
            A
          </Tag>
          <Tag variant={"gradeA"} size={"gradesLg"}>
            A
          </Tag>
          <Tag variant={"gradeA"} size={"gradesDescription"}>
            Excellent
          </Tag>
        </HStack>
        <HStack gap={3}>
          <Tag variant={"gradeB"} size={"gradesSm"}>
            B
          </Tag>
          <Tag variant={"gradeB"} size={"gradesLg"}>
            B
          </Tag>
          <Tag variant={"gradeB"} size={"gradesDescription"}>
            Good
          </Tag>
        </HStack>
        <HStack gap={3}>
          <Tag variant={"gradeC"} size={"gradesSm"}>
            C
          </Tag>
          <Tag variant={"gradeC"} size={"gradesLg"}>
            C
          </Tag>
          <Tag variant={"gradeC"} size={"gradesDescription"}>
            Fair
          </Tag>
        </HStack>
        <HStack gap={3}>
          <Tag variant={"gradeD"} size={"gradesSm"}>
            D
          </Tag>
          <Tag variant={"gradeD"} size={"gradesLg"}>
            D
          </Tag>
          <Tag variant={"gradeD"} size={"gradesDescription"}>
            Poor
          </Tag>
        </HStack>
        <HStack gap={3}>
          <Tag variant={"gradeF"} size={"gradesSm"}>
            F
          </Tag>
          <Tag variant={"gradeF"} size={"gradesLg"}>
            F
          </Tag>
          <Tag variant={"gradeF"} size={"gradesDescription"}>
            Critical
          </Tag>
        </HStack>
      </VStack>
    );
  },
};
