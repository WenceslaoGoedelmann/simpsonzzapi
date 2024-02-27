import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgb(255, 217, 15);
  border: 2px black solid;
  border-radius: 15px;
  padding: 1.5rem 1rem;
  width: 90%;
  max-width: 620px;
  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 425px) {
    width: 270px;
    padding: 0.8rem 0.5rem;
  }

`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color:black;
 
  img{
    width: 240px;
    height: 140px;
    border-radius: 10px;
  }
  p{
    margin: 0;
  color: #666;
  font-size: 1rem;
  }
  @media (max-width: 768px) {
    gap: 10px;
    img{
    width: 120px;
    height: 80px;
    border-radius: 10px;
  }
  p{
  font-size: 0.7rem;
  }
  h3{
  font-size: 0.8rem;
  }

  }
  @media (max-width: 425px) {
    gap: 5px;
    img{
    width: 90px;
    height: 60px;
    border-radius: 10px;
  }
  p{
  font-size: 0.6rem;
  }
  h3{
  font-size: 0.7rem;
  }

  }

`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p{
    color: black;
  }
  @media (max-width: 425px) {
    p{font-size: 0.7rem;}
  }
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;


  color: black;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;
