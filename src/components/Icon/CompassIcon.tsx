import { Icon } from "@chakra-ui/icons";
import { DarkableIconProps } from "./Icon";

export function CompassIcon(props: DarkableIconProps) {
  return (
    <Icon viewBox="0 0 10 19" fill="none" {...props}>
      <rect width="=10" height="19" rx="8" fill="#4A5568" />
      <path
        d="M5 0L9.33013 9H0.669873L5 0Z"
        fill="#4A5568"
        stroke={"#4A5568"}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19L0.669872 10L9.33013 10L5 19Z"
        fill="#CBD5E0"
        stroke={"#CBD5E0"}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
