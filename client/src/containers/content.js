import React from 'react';
import { Content } from '../components';

export function ContentContainer({ children }) {
  return (
    <Content>
      <Content.Base>
        <Content.Title>I'm weekly available at</Content.Title>
        <Content.Frame>
          <Content.Group>
            <Content.Day>Monday</Content.Day>
            {children}
          </Content.Group>
          <Content.Group>
            <Content.Day>Tuesday</Content.Day>
            {children}
          </Content.Group>
        </Content.Frame>
      </Content.Base>
      <Content.Button>Save</Content.Button>
    </Content>
  );
}
