import { Select } from "../Select";
import type { SelectProps } from "../Select";
import { IconButton } from "../Button";
import { CloseIcon } from "@chakra-ui/icons";
import { FormControl } from "../FormControl";

export interface CancellableSelectProps extends SelectProps {
  selectValue?: string;
  handleCancel?: () => void;
}

export function CancellableSelect(props: CancellableSelectProps) {
  const {
    children,
    selectValue = undefined,
    handleCancel = () => null,
    ...rest
  } = props;

  return (
    <FormControl>
      <Select
        {...rest}
        variant={selectValue ? "withRightPadding" : "base"}
        value={selectValue}
      >
        {children}
      </Select>
      {selectValue && (
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
