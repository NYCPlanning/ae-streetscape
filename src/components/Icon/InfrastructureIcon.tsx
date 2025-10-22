import { Icon } from "@chakra-ui/icons";
import { DarkableIconProps } from "./Icon";

export function InfrastructureIcon(props: DarkableIconProps) {
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
        d="M4.40039 12.0004V8.00039C4.40039 7.24615 4.40039 6.86902 4.63471 6.63471C4.86902 6.40039 5.24614 6.40039 6.00039 6.40039C6.75464 6.40039 7.13176 6.40039 7.36607 6.63471C7.60039 6.86902 7.60039 7.24615 7.60039 8.00039"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
      />
      <path
        d="M10.0005 12V9.6C10.0005 8.84576 10.0005 8.46864 9.76617 8.23432C9.53185 8 9.15473 8 8.40049 8H7.60049C6.84624 8 6.46912 8 6.2348 8.23432C6.00049 8.46864 6.00049 8.84576 6.00049 9.6V12"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
      />
      <path
        d="M11.6004 11.9999V6.30873C11.6004 5.77239 11.6004 5.50422 11.458 5.29866C11.3155 5.09308 11.0644 4.99892 10.5622 4.8106C9.58007 4.44232 9.08903 4.25817 8.74471 4.49679C8.40039 4.73541 8.40039 5.25985 8.40039 6.30873V7.99991"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
      />
      <path
        d="M4.80029 6.4V5.8C4.80029 5.42288 4.80029 5.23432 4.91745 5.11716C5.03461 5 5.22317 5 5.60029 5H6.40029C6.77742 5 6.96598 5 7.08314 5.11716C7.20029 5.23432 7.20029 5.42288 7.20029 5.8V6.4"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path
        d="M6.00049 4.8V4"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path
        d="M12.0005 12H4.00049"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path
        d="M7.2002 9.2002H8.8002"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path
        d="M7.2002 10.4004H8.8002"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
    </Icon>
  );
}
