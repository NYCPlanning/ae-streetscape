import { Select as ChakraSelect } from "@chakra-ui/react";
import type { SelectProps as ChakraSelectProps } from "@chakra-ui/react";
import { IconButton } from "../Button";
import { CloseIcon } from "@chakra-ui/icons";
import { FormControl } from "../FormControl";

export interface SelectProps extends ChakraSelectProps {
  isCancellable?: boolean;
  handleCancel?: () => void;
}

export function Select(props: SelectProps) {
  const {
    children,
    isCancellable = false,
    value = undefined,
    handleCancel = () => null,
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
    <FormControl>
      <ChakraSelect
        {...rest}
        variant={value ? "withRightPadding" : "base"}
        value={value}
      >
        {children}
      </ChakraSelect>
      {value && (
        <IconButton
          aria-label={`Clear`}
          _hover={{
            border: 0,
            svg: {
              backgroundColor: "gray.200",
            },
          }}
          _focus={{
            border: 0,
            svg: {
              backgroundColor: "gray.200",
            },
          }}
          _active={{
            border: 0,
          }}
          pos={"absolute"}
          minH={"unset"}
          minW={"unset"}
          height={"min-content"}
          width={"min-content"}
          bottom={2}
          right={10}
          cursor={"pointer"}
          bg={"transparent"}
          color={"inherit"}
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
    </FormControl>
  );
}
