import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
  h2{
    color: black;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 425px) {
    padding: 0.5rem;
  }
  
`;

export const PedidoContainerStyled = styled.div`
    background: rgb(255, 217, 15);
    border: 2px black solid;
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: black;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const PriceStyled = styled.p`
  font-weight: 800;
  font-size: 2rem;
color: black;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
