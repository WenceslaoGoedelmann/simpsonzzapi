import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 90vw;
  max-width: 1600px;
  //padding: 2rem;
  margin: 0 auto;

`;

export const CategoriasWrapper = styled.section`
  margin-top: 8rem;
  h2 {
    font-weight: 400;
    color: yellow;
    text-shadow: 2px 2px  black;
    font-family:  cursive;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    h2 {
      font-size: 18px;
      text-shadow: 1.5px 1.5px  black;
  }
  }
`;

export const ProductosWrapper = styled.section`
  padding-top: 5rem;
  h2 {
    font-weight: 400;
    color: yellow;
    text-shadow: 2px 2px  black;
    font-family:  cursive;
  }
  @media (max-width: 768px) {
    padding-top: 3rem;
    h2 {
      font-size: 18px;
      text-shadow: 1.5px 1.5px  black;
  }
  }
`;

export const RecomendadosWrapper = styled.section`
  margin-top: 5rem;
  width: 100%;

  h2 {
    font-weight: 400;
    color: yellow;
    text-shadow: 2px 2px  black;
    font-family:  cursive;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    h2 {
      font-size: 18px;
      text-shadow: 1.5px 1.5px  black;
  }
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;
