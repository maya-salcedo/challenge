import React from 'react';
import { Content } from '../components';

export function ContentContainer({ children }) {
  return (
    <Content>
      <Content.Title>I'm weekly available at</Content.Title>
      <Content.Frame>{children}</Content.Frame>
      <Content.Button>Save</Content.Button>
    </Content>
  );
}
