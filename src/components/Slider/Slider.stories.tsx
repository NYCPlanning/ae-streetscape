import type { Meta, StoryObj } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "./Slider";
import { theme } from "../../theme";
import { Tooltip } from "../Tooltip";
import { useState } from "react";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Slider"),
    children: { type: "string" },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const formatDistance = (distance: number) => {
  if (distance >= 2640) {
    return `${new Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(distance / 5280)} mi`;
  }
  return `${distance} ft`;
};

const SliderRadiusExample = () => {
  const DEFAULT_SLIDER_VALUE = 400;
  const [sliderValue, setSliderValue] = useState(DEFAULT_SLIDER_VALUE);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Slider
      aria-label="slider-radius-example"
      defaultValue={DEFAULT_SLIDER_VALUE}
      min={50}
      max={7920}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(isMouseDown);
      }}
      onChangeStart={() => {
        setIsMouseDown(true);
        setShowTooltip(true);
      }}
      onChangeEnd={() => {
        setIsMouseDown(false);
        setShowTooltip(isHovered);
      }}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderMark value={sliderValue}>
        <Tooltip
          label={formatDistance(sliderValue)}
          isOpen={showTooltip}
          hasArrow
          w={28}
          bg={"gray.800"}
          display={"flex"}
          justifyContent={"center"}
          gap={"0.625rem"}
          marginTop={"15px"}
        >
          <SliderThumb />
        </Tooltip>
      </SliderMark>
    </Slider>
  );
};

export const Base: Story = {
  render: () => (
    <Slider aria-label="slider-base-example">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  ),
};

export const Radius: Story = {
  render: () => <SliderRadiusExample></SliderRadiusExample>,
};
