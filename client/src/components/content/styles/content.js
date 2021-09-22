import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 3rem 6rem;
  background-color: #aba8a9;
  font-family: 'Montserrat', sans-serif;
`;

export const Base = styled.div`
  background-color: #d8dfee;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

export const Frame = styled.div`
  background-color: #fff;
  width: 35rem;
  height: 35rem;
  margin: 2rem 3rem;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  padding: 2rem 4rem 0rem 4rem;
`;

export const Group = styled.div`
  padding: 1rem;
  :first-of-type {
    padding-top: 2rem;
  }
`;

export const Day = styled.div`
  padding-left: 3rem;
`;

export const Button = styled.button`
  background-color: red;
`;
