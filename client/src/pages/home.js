import React from 'react';
import MultiRangeSlider from '../components/multiRangeSlider/multiRangeSlider';
import { ContentContainer } from '../containers/content';

export default function Home() {
  return (
    <>
      <ContentContainer>
        <MultiRangeSlider
          min={0}
          max={24}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </ContentContainer>
    </>
  );
}
