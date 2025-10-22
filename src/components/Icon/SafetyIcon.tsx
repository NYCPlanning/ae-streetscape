import { Icon } from "@chakra-ui/icons";
import { DarkableIconProps } from "./Icon";

export function SafetyIcon(props: DarkableIconProps) {
  const { dark } = props;
  return (
    <Icon viewBox="0 0 16 16" fill="none" {...props}>
      <rect
        width="16"
        height="16"
        rx="8"
        fill="#2B6CB0"
        fillOpacity={dark ? 1 : 0.1}
      />
      <path
        d="M8.6667 9.60012H7.3331V8.66692H6.3999V7.33332H7.3331V6.40012H8.6667V7.33332H9.5999V8.66692H8.6667V9.60012Z"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.2 10.4001L4.452 5.16527C4.43777 5.06562 4.46178 4.96428 4.51922 4.88162C4.57665 4.79896 4.66325 4.7411 4.7616 4.71967L7.8264 4.03847C7.94074 4.01305 8.05926 4.01305 8.1736 4.03847L11.2384 4.72007C11.4424 4.76527 11.5776 4.95847 11.548 5.16567L10.8 10.4001C10.772 10.5981 10.6 11.8001 8 11.8001C5.4 11.8001 5.228 10.5981 5.2 10.4001Z"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
