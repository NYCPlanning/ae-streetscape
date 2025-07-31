import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Tabs, TabList, TabPanel, TabPanels, Tab } from "./Tabs";
import { theme } from "../../theme";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Tabs"),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: (
      <>
        <TabList key={"TabList"}>
          <Tab key={"Tab 1"}>One</Tab>
          <Tab key={"Tab 2"}>Two</Tab>
          <Tab key={"Tab 3"}>Three</Tab>
        </TabList>
        <TabPanels key={"TabPanels"}>
          <TabPanel key={"TabPanel 1"}>
            <p>one!</p>
          </TabPanel>
          <TabPanel key={"TabPanel 2"}>
            <p>two!</p>
          </TabPanel>
          <TabPanel key={"TabPanel 3"}>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </>
    ),
  },
  render: function Render(args) {
    return <Tabs {...args} />;
  },
};
