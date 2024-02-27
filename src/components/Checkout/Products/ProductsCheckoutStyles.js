import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 280px;
  }
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 600;
  font-size: 22px;
  color: black;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  width: 80%;
  height: 440px;
  margin: 0 auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: black;
  font-weight: 800;
  font-size: 1.3rem;
  @media (max-width: 425px) {
font-size: 1rem;
  }
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
`;
