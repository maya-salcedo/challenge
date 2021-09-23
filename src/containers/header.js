import React from 'react';
import { Header } from '../components';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>Im a header</Header.Frame>
      {children}
    </Header>
  );
}
