import React from 'react';
import {
  Container,
  InputLeft,
  InputRight,
  Range,
  Slider,
  Track,
  Value,
} from './styles/rangeSlider';

export default function RangerSlider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

RangerSlider.InputLeft = function RangerSliderInputLeft({
  children,
  ...restProps
}) {
  return <InputLeft {...restProps}>{children}</InputLeft>;
};

RangerSlider.InputRight = function RangerSliderInputRight({
  children,
  ...restProps
}) {
  return <InputRight {...restProps}>{children}</InputRight>;
};

RangerSlider.Slider = function RangerSliderSlider({ children, ...restProps }) {
  return <Slider {...restProps}>{children}</Slider>;
};

RangerSlider.Track = function RangerSliderTrack({ children, ...restProps }) {
  return <Track {...restProps}>{children}</Track>;
};

RangerSlider.Range = function RangerSliderRange({ children, ...restProps }) {
  return <Range {...restProps}>{children}</Range>;
};

RangerSlider.Value = function RangerSliderValue({ children, ...restProps }) {
  return <Value {...restProps}>{children}</Value>;
};
