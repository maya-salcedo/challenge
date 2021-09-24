import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-content: start;
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

  @media (max-width: 930px) {
    width: 40rem;
  }

  @media (max-width: 855px) {
    width: 35rem;
    padding: 1rem;
  }
`;

export const Frame = styled.div`
  background-color: #fcfcfc;
  width: 45rem;
  height: auto;
  margin: 2rem 4rem;
  border-radius: 1rem;

  @media (max-width: 1100px) {
    margin: 1.5rem;
    width: 42rem;
  }

  @media (max-width: 930px) {
    width: 35rem;
  }

  @media (max-width: 855px) {
    width: 33rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  padding-top: 2rem;

  @media (max-width: 1100px) {
    padding-top: 1rem;
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  padding: 1rem 2.3rem 2.5rem;
  width: 40rem;

  :first-of-type {
    padding-top: 5rem;
  }

  :last-of-type {
    padding-bottom: 6rem;
  }

  @media (max-width: 1100px) {
    padding-left: 1rem;
    width: 34rem;
  }

  @media (max-width: 992px) {
    padding-left: 1rem;
    width: 30rem;
  }

  @media (max-width: 860px) {
    padding-left: 2.8rem;
    :first-of-type {
      padding-top: 3rem;
    }
  }

  @media (max-width: 850px) {
    padding-left: 2.2rem;
    :first-of-type {
      padding-top: 3rem;
    }
  }
`;

export const Button = styled.button`
  background-color: #79d70f;
  border-radius: 4px;
  font-size: 2rem;
  padding: 0.5rem 5rem;
  margin: 1rem;
  border: 0;
  color: white;
  cursor: pointer;
  color: #fff;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;
