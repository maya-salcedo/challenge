import styled from 'styled-components';

export const Container = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 500px;
  outline: none;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  ::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;

export const InputLeft = styled(Input)`
  z-index: 3;
`;

export const InputRight = styled(Input)`
  z-index: 4;
`;

export const Slider = styled.div`
  position: relative;
  width: 500px;

  .slider__range {
    position: absolute;
    border-radius: 3px;
    height: 5px;
    background-color: #79d70f;
    z-index: 2;
  }
`;

export const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

export const Range = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #79d70f;
  z-index: 5;
`;

export const Value = styled.div`
  position: absolute;
  color: black;
  font-size: 12px;
  margin-top: -20px;
  background-color: antiquewhite;
  left: 210px;
`;
