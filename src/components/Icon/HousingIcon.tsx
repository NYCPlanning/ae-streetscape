import { Icon } from "@chakra-ui/icons";
import { DarkableIconProps } from "./Icon";

export function HousingIcon(props: DarkableIconProps) {
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
        d="M4 6.40005L7.8928 4.45365C7.92609 4.43703 7.96279 4.42838 8 4.42838C8.03721 4.42838 8.07391 4.43703 8.1072 4.45365L12 6.40005M11.2 7.60005V10.8C11.2 11.0122 11.1157 11.2157 10.9657 11.3657C10.8157 11.5158 10.6122 11.6 10.4 11.6H5.6C5.38783 11.6 5.18434 11.5158 5.03431 11.3657C4.88429 11.2157 4.8 11.0122 4.8 10.8V7.60005"
        stroke={dark ? "white" : "#2B6CB0"}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
