import { Tabs as ChakraTabs } from "@chakra-ui/react";
import type { TabsProps as ChakraTabsProps } from "@chakra-ui/react";

export const Tabs = ChakraTabs;
export interface TabsProps extends ChakraTabsProps {}

import { Tab as ChakraTab } from "@chakra-ui/react";
import type { TabProps as ChakraTabProps } from "@chakra-ui/react";

export const Tab = ChakraTab;
export interface TabProps extends ChakraTabProps {}

import { TabList as ChakraTabList } from "@chakra-ui/react";
import type { TabListProps as ChakraTabListProps } from "@chakra-ui/react";

export const TabList = ChakraTabList;
export interface TabListProps extends ChakraTabListProps {}

import { TabPanels as ChakraTabPanels } from "@chakra-ui/react";
import type { TabPanelsProps as ChakraTabPanelsProps } from "@chakra-ui/react";

export const TabPanels = ChakraTabPanels;
export interface TabPanelsProps extends ChakraTabPanelsProps {}

import { TabPanel as ChakraTabPanel } from "@chakra-ui/react";
import type { TabPanelProps as ChakraTabPanelProps } from "@chakra-ui/react";

export const TabPanel = ChakraTabPanel;
export interface TabPanelProps extends ChakraTabPanelProps {}
