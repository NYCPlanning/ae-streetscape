import { Icon } from "@chakra-ui/icons";
import { DarkableIconProps } from "./Icon";

export function EmailInvertedIcon(props: DarkableIconProps) {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </Icon>
  );
}
