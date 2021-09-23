import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 3rem 6rem;
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
`;

export const Base = styled.div`
  background-color: #e6e6e6;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 90%;
`;

export const Frame = styled.div`
  background-color: #fcfcfc;
  width: 70%;
  height: auto;
  margin: 2rem 3rem;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  font-size: 5rem;

  padding: 2rem 4rem 0rem 4rem;
  color: #303030;
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
  background-color: #303030;
  border-radius: 4px;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 10rem;
  padding: 1rem 5rem;
  border: 0;
  color: white;
  cursor: pointer;
  color: #79d70f;
`;
