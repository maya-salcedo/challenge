import React from 'react';
import { Content } from '../components';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function ContentContainer({ children }) {
  return (
    <Content>
      <Content.Base>
        <Content.Title>I'm weekly available at</Content.Title>
        <Content.Frame>
          {daysOfWeek.map((day) => {
            return (
              <Content.Group key={day}>
                <Content.Day>{day}</Content.Day>
                {children}
              </Content.Group>
            );
          })}
          <Content.Button>Save</Content.Button>
        </Content.Frame>
      </Content.Base>
    </Content>
  );
}
