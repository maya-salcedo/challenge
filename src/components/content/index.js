import React from 'react';
import { Button, Container, Day, Frame, Group, Title } from './styles/content';

export default function Content({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Content.Frame = function ContentFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Content.Title = function ContentTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Content.Group = function ContentGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Content.Day = function ContentDay({ children, ...restProps }) {
  return <Day {...restProps}>{children}</Day>;
};

Content.Button = function ContentButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
