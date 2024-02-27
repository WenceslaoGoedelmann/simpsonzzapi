import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  width: 85%;

  background: rgb(255, 217, 15);
  border: 2px black solid;
  //box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    max-width: 400px;
  }
  @media (max-width: 425px) {
    max-width: 260px;
    img {
    width: 60px;
    height: 50px;
  }
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 240px;
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 600;
  color:black;
  @media (max-width: 425px) {
font-size: 0.8rem;
  }
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.h3`
  font-weight: 600;
  margin: 0;
color:black;
@media (max-width: 425px) {
font-size: 0.8rem;
  }
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;
`;
