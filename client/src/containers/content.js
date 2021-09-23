import React, { useState } from 'react';
import { Content } from '../components';
import { MultiRangeSlider } from './rangeSlider';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function ContentContainer() {
  const [active, setActive] = useState('slider__range');
  console.log(active);
  return (
    <Content>
      <Content.Base>
        <Content.Title>My Free Time</Content.Title>
        <Content.Frame>
          {daysOfWeek.map((day) => {
            return (
              <Content.Group key={day}>
                <Content.Day>{day}</Content.Day>
                <MultiRangeSlider
                  min={0}
                  max={24}
                  onChange={() => setActive('green')}
                  className={active}
                />
              </Content.Group>
            );
          })}
          <Content.Button>Save</Content.Button>
        </Content.Frame>
      </Content.Base>
    </Content>
  );
}
