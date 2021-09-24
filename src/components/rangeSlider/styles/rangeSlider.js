import styled from 'styled-components';

export const Container = styled.div`
  height: 3rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: start;
  align-items: auto;
  align-content: start;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${(props) => (props.center ? 'center' : 'start')};
  width: 40rem;

  @media (max-width: 930px) {
    width: 33rem;
  }

  @media (max-width: 860px) {
    width: 29rem;
  }

  @media (max-width: 540px) {
    padding-left: 0.1rem;
    width: 25rem;
  }

  @media (max-width: 470px) {
    width: 21rem;
  }

  @media (max-width: 410px) {
    width: 16rem;
  }
`;

export const DayCheckboxLabel = styled(Row)`
  width: 15rem;
  padding-left: 1rem;
  > label {
    font-size: 1.5rem;
    font-weight: bold;
    color: #393e46;

    @media (max-width: 860px) {
      font-size: 1.1rem;
    }

    @media (max-width: 410px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1100px) {
    padding-left: 2rem;
  }

  @media (max-width: 992px) {
    width: 13rem;
    padding-left: 2.5rem;
  }

  @media (max-width: 860px) {
    width: 10rem;
    padding-left: 2rem;
  }

  @media (max-width: 470px) {
    padding-left: 1rem;
  }

  @media (max-width: 410px) {
    width: 8rem;
    padding-left: 0.5rem;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenDayCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 5px;
  padding-bottom: 1rem;

  @media (max-width: 410px) {
    padding-bottom: 0;
  }
`;

export const StyledDayCheckbox = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
  background: ${(props) => (props.checked ? '#79d70f' : 'red')};
  opacity: ${(props) => (props.checked ? 0.8 : 0.5)};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenDayCheckboxInput}:focus + & {
    box-shadow: 0 0 0 3px #e6e6e6;
  }

  ${HiddenDayCheckboxInput}:hover + & {
    opacity: 1;
  }

  ${CheckboxIcon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  @media (max-width: 410px) {
    margin: 0.5rem;
  }
`;

export const Input = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 38rem;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  &::-webkit-slider-thumb {
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

  &::-moz-range-thumb {
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

  @media (max-width: 1100px) {
    width: 34rem;
  }

  @media (max-width: 930px) {
    width: 27rem;
  }

  @media (max-width: 540px) {
    width: 20rem;
  }

  @media (max-width: 410px) {
    width: 14rem;
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
  width: 38rem;

  .red {
    position: absolute;
    border-radius: 3px;
    height: 7px;
    background-color: red;
    z-index: 2;
    opacity: 0.5;
  }

  .green {
    position: absolute;
    border-radius: 3px;
    height: 7px;
    background-color: #79d70f;
    z-index: 2;
  }

  @media (max-width: 1100px) {
    width: 34rem;
  }

  @media (max-width: 930px) {
    width: 27rem;
  }

  @media (max-width: 540px) {
    width: 20rem;
  }

  @media (max-width: 410px) {
    width: 14rem;
  }
`;

export const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 7px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

export const Range = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  z-index: 5;
`;

export const TimeRange = styled.div`
  > p {
    color: black;
    font-size: 1.6rem;
    margin: 0;
    padding: 1rem 1rem 0 0;

    @media (max-width: 860px) {
      font-size: 1rem;
      padding: 1.3rem 1.5rem;
    }

    @media (max-width: 410px) {
      padding-left: 0.5rem;
    }

    @media (max-width: 410px) {
      padding-bottom: 0;
      padding-top: 0.6rem;
    }
  }
`;
