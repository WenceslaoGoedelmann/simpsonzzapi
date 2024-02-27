import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  h1{
    font-weight: 400;
    color: yellow;
    text-shadow: 2px 2px  black;
    font-family:  cursive;
  }
  @media (max-width: 768px) {
    h1{ font-size: 1.5rem;}
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  p{
    color: black;
  }
  @media (max-width: 768px) {
    p{font-size: 12px;}
  }
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: var(--gray-bg);
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    img{
      width: 10px;
    }
  }
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: black;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
