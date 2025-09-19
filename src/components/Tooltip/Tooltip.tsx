import { useRef } from "react";
import {
  Tooltip as ChakraTooltip,
  useOutsideClick,
  useBoolean,
  chakra,
} from "@chakra-ui/react";
import type { TooltipProps as ChakraTooltipProps } from "@chakra-ui/react";

export interface TooltipProps extends ChakraTooltipProps {}
export const Tooltip = ({
  children,
  ...restToolTipProps
}: ChakraTooltipProps) => {
  const ref = useRef(null);
  const [isOpen, setIsLabelOpen] = useBoolean(false);
  useOutsideClick({
    ref: ref,
    handler: setIsLabelOpen.off,
  });

  return (
    <ChakraTooltip isOpen={isOpen} {...restToolTipProps}>
      <chakra.div
        onMouseEnter={setIsLabelOpen.on}
        onMouseLeave={setIsLabelOpen.off}
        onTouchStart={setIsLabelOpen.toggle}
        ref={ref}
        width={"fit-content"}
      >
        {children}
      </chakra.div>
    </ChakraTooltip>
  );
};
