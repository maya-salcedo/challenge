import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <HomeScreen />
      <FooterContainer />
    </>
  );
}
