import React from 'react';
import {
  Container,
  InputLeft,
  InputRight,
  Range,
  Slider,
  Track,
  TimeRange,
  DayCheckboxLabel,
  HiddenDayCheckboxInput,
  StyledDayCheckbox,
  CheckboxContainer,
  CheckboxIcon,
} from './styles/rangeSlider';

export default function RangeSlider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

RangeSlider.DayCheckboxLabel = function RangerSliderDayCheckboxLabel({
  children,
  label,
  ...restProps
}) {
  return (
    <DayCheckboxLabel {...restProps}>
      <label {...restProps}>
        {children}
        {label}
      </label>
    </DayCheckboxLabel>
  );
};

RangeSlider.DayCheckbox = function RangerSliderDayCheckbox({
  checked,
  ...restProps
}) {
  return (
    <CheckboxContainer>
      <HiddenDayCheckboxInput checked={checked} {...restProps} />
      <StyledDayCheckbox checked={checked}>
        <CheckboxIcon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </CheckboxIcon>
      </StyledDayCheckbox>
    </CheckboxContainer>
  );
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
