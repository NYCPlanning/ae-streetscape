import { Select as ChakraSelect, Flex } from "@chakra-ui/react";
import type { SelectProps as ChakraSelectProps } from "@chakra-ui/react";
import { IconButton } from "../Button";
import { CloseIcon } from "@chakra-ui/icons";

export interface SelectProps extends ChakraSelectProps {
  isCancellable?: boolean;
  onChange?: (event?: React.ChangeEvent<HTMLSelectElement>) => void;
  handleCancel?: () => void;
}

export function Select(props: SelectProps) {
  const {
    children,
    isCancellable = true,
    value = undefined,
    onChange = () => {},
    handleCancel = () => {
      onChange();
    },
    ...rest
  } = props;

  if (!isCancellable) {
    return (
      <ChakraSelect {...rest} value={value}>
        {children}
      </ChakraSelect>
    );
  }

  return (
    <Flex
      pos={"relative"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <ChakraSelect
        {...rest}
        value={value}
        onChange={onChange}
        data-is-cancellable={isCancellable && value !== ""}
      >
        {children}
      </ChakraSelect>
      {value && (
        <IconButton
          aria-label={`Clear`}
          _hover={{
            borderColor: "teal",
            borderWidth: "1px",
          }}
          _focus={{
            borderColor: "teal",
            borderWidth: "1px",
          }}
          _active={{
            borderColor: "teal",
            borderWidth: "1px",
          }}
          pos={"absolute"}
          minH={"unset"}
          minW={"unset"}
          height={"min-content"}
          width={"min-content"}
          right={10}
          cursor={"pointer"}
          bg={"transparent"}
          color={"inherit"}
          display={"flex"}
          onClick={() => {
            handleCancel();
          }}
          icon={
            <CloseIcon
              boxSize={3}
              p={0.5}
              border={"1px solid"}
              borderRadius={16}
            />
          }
        />
      )}
    </Flex>
  );
}
