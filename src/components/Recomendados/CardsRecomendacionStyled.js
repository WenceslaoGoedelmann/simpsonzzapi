import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};

  gap: 20px;
  padding: 1rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 140px;
  padding: 1rem 1.7rem;
  background: rgb(255, 217, 15);
  border: 2px black solid;
  border-radius: 15px;
  @media (max-width: 768px) {
flex-direction: column;
height: 230px;
padding: 0.7rem 0.5rem;
gap: 0.2rem;

    }

`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 140px;
  height: 80px;
    }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
  @media (max-width: 768px) {
    width: 120px;
    }
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 800;
  //letter-spacing: 0.05rem;
  font-family: 'Montserrat', sans-serif;
    text-shadow: none;
    color:black;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
 
`;

export const InfoCard = styled.p`
  margin: 0;
  color: #666;
  font-size: 1.2rem;
  @media (max-width: 768px) {
      font-size: 0.7rem;
    }
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
color: black;
@media (max-width: 768px) {
      font-size: 0.8rem;
    }
`;
