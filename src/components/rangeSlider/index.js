import React from 'react';
import {
  Container,
  InputLeft,
  InputRight,
  Range,
  Slider,
  Track,
  TimeRange,
  DayCheckbox,
} from './styles/rangeSlider';

export default function RangeSlider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

RangeSlider.DayCheckbox = function RangerSliderDayCheckbox({
  children,
  ...restProps
}) {
  return <DayCheckbox {...restProps}>{children}</DayCheckbox>;
};

RangeSlider.InputLeft = function RangerSliderInputLeft({
  children,
  ...restProps
}) {
  return <InputLeft {...restProps}>{children}</InputLeft>;
};

RangeSlider.InputRight = function RangerSliderInputRight({
  children,
  ...restProps
}) {
  return <InputRight {...restProps}>{children}</InputRight>;
};

RangeSlider.Slider = function RangerSliderSlider({ children, ...restProps }) {
  return <Slider {...restProps}>{children}</Slider>;
};

RangeSlider.Track = function RangerSliderTrack({ children, ...restProps }) {
  return <Track {...restProps}>{children}</Track>;
};

RangeSlider.Range = function RangerSliderRange({ children, ...restProps }) {
  return <Range {...restProps}>{children}</Range>;
};

RangeSlider.TimeRange = function RangerSliderTimeRange({
  children,
  ...restProps
}) {
  return <TimeRange {...restProps}>{children}</TimeRange>;
};
