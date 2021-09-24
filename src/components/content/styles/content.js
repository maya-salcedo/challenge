import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: content-box;
  background-color: #e6e6e6;
  border-radius: 0.5rem;
  padding: 1rem 3rem 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: min-content;
  margin: 5rem auto;

  @media (max-width: 1100px) {
    width: 45rem;
    padding: 1rem;
  }

  @media (max-width: 926px) {
    width: 40rem;
  }

  @media (max-width: 855px) {
    width: 35rem;
    padding: 0.8rem;
  }
`;

export const Frame = styled.div`
  background-color: #fcfcfc;
  width: auto;
  height: auto;
  margin: 2rem 4rem;
  border-radius: 1rem;

  @media (max-width: 1100px) {
    margin: 2rem;
  }

  @media (max-width: 833px) {
    margin: auto;
    width: 38rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  padding: 2rem 4rem 0rem 4rem;
  margin-left: 3rem;
`;

export const Group = styled.div`
  padding: 1rem 6rem;
  width: 30rem;

  :first-of-type {
    padding-top: 5rem;
  }

  @media (max-width: 934px) {
    padding: 1rem 5rem;
    margin: 0;
  }

  @media (max-width: 922px) {
    padding: 1rem 3rem;
    margin: 0;
    :first-of-type {
      padding-top: 3rem;
    }
  }

  @media (max-width: 843px) {
    padding: 1rem;
  }
`;

export const Day = styled.div`
  padding-left: 0;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #79d70f;
  border-radius: 4px;
  font-size: 2rem;
  margin: 2rem 14rem 3rem;
  padding: 0.5rem 5rem;
  border: 0;
  color: white;
  cursor: pointer;
  color: #fff;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;
