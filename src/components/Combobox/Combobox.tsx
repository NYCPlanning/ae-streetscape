import { chakra } from "@chakra-ui/react";
import { comboboxTheme } from "../../theme/components/combobox";
import {
  Combobox as ArkCombobox,
  useListCollection as arkUseListCollection,
  createListCollection as arkCreateListCollection,
  useCombobox as arkUseCombobox,
} from "@ark-ui/react/combobox";
import type {
  ComboboxInputValueChangeDetails as ArkComboboxInputValueChangeDetails,
  ListCollection as ArkListCollection,
  ComboboxSelectionDetails as ArkComboboxSelectionDetails,
  UseComboboxReturn as ArkUseComboboxReturn,
} from "@ark-ui/react/combobox";
import type { CollectionItem as ArkComboboxCollectionItemProps } from "@ark-ui/react/collection";

const ComboboxRoot = chakra(ArkCombobox.Root, {
  baseStyle: comboboxTheme.baseStyle?.root,
});

const ComboboxControl = chakra(ArkCombobox.Control, {
  baseStyle: comboboxTheme.baseStyle?.control,
});

const ComboboxInput = chakra(ArkCombobox.Input, {
  baseStyle: comboboxTheme.baseStyle?.input.field,
});

const ComboboxClearTrigger = chakra(ArkCombobox.ClearTrigger, {
  baseStyle: comboboxTheme.baseStyle?.clearTrigger,
});

const ComboboxContent = chakra(ArkCombobox.Content, {
  baseStyle: comboboxTheme.baseStyle?.content,
});

const ComboboxItem = chakra(ArkCombobox.Item, {
  baseStyle: comboboxTheme.baseStyle?.item,
});

const ComboboxItemText = chakra(ArkCombobox.ItemText, {
  baseStyle: comboboxTheme.baseStyle?.itemText,
});

export const Combobox = {
  ...ArkCombobox,
  Root: ComboboxRoot,
  Input: ComboboxInput,
  Control: ComboboxControl,
  ClearTrigger: ComboboxClearTrigger,
  Content: ComboboxContent,
  Item: ComboboxItem,
  ItemText: ComboboxItemText,
};

export interface ComboboxCollectionItemProps
  extends ArkComboboxCollectionItemProps {}

export interface ComboboxInputValueChangeDetails
  extends ArkComboboxInputValueChangeDetails {}
export interface ListCollection extends ArkListCollection {}
export interface ComboboxSelectionDetails extends ArkComboboxSelectionDetails {}
export interface UseComboboxReturn
  extends ArkUseComboboxReturn<ComboboxCollectionItemProps> {}

export type ComboboxListCollectionProps = {
  label: string;
  value: string;
};

export const useListCollection = arkUseListCollection;
export const createListCollection = arkCreateListCollection;
export const useCombobox = arkUseCombobox;
