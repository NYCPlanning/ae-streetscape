import { Combobox, useListCollection } from "./Combobox";
import type {
  ComboboxCollectionItemProps,
  ComboboxListCollectionProps,
} from "./Combobox";
import { useFilter } from "@ark-ui/react/locale";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import {
  ComboboxInputValueChangeDetails,
  createListCollection,
} from "@ark-ui/react/combobox";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { theme } from "../../theme";
import { MapPinIcon } from "../Icon";
import { Text } from "@chakra-ui/react";

const meta = {
  title: "Components/Combobox",
  component: Combobox.Root,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Combobox"),
    children: { type: "string" },
  },
} satisfies Meta<typeof Combobox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: ComboboxCollectionItemProps[] = [
  { label: "123 Loreiem Place, Bronx, NY 10000", value: "result0" },
  { label: "123 Loreiem Place, Bronx, NY 10001", value: "result1" },
  { label: "123 Loreiem Place, Bronx, NY 10002", value: "result2" },
  { label: "123 Loreiem Place, Bronx, NY 10003", value: "result3" },
];

export const BaseCombobox = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const collection = createListCollection({ items });

  const { filter } = useListCollection<ComboboxListCollectionProps>({
    initialItems: collection.items,
    filter: contains,
  });

  const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
    filter(details.inputValue);
  };

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={handleInputChange}
      inputBehavior="autohighlight"
      width={"275px"}
    >
      <Combobox.Control position="relative" display="flex" alignItems="center">
        <SearchIcon
          color="primary.600"
          h={5}
          w={5}
          position="absolute"
          left="0.375rem"
          pointerEvents="none"
        />

        <Combobox.Input
          placeholder="Search by Address..."
          autoComplete="off"
          flex="1"
          pl="2rem"
        />

        <Combobox.ClearTrigger
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          right={"2rem"}
          w="1.5rem"
          h="100%"
          bg="white"
          flexShrink={0}
        >
          <CloseIcon w={3} h={3} />
        </Combobox.ClearTrigger>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          <Text
            style={{
              paddingTop: 2,
              fontSize: "sm",
              fontWeight: "700",
              color: "gray.700",
            }}
          >
            Add Map Pin
          </Text>
          {collection.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <MapPinIcon h={4} w={2.5} mr={2} />
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};

export const Base: Story = {
  render: () => <BaseCombobox></BaseCombobox>,
};
