import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
  @media (max-width: 768px) {

    img{
      width: 100px;
    }
  }
`;

export const TitleStyled = styled.h1`
 
 color: black;
 @media (max-width: 768px) {

font-size: 1rem;
}
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 50px;
    color: black;
  }
  @media (max-width: 768px) {
p {
  font-size: 0.7rem;
}

}
`;

export const PatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
  bottom: -80px;
`;
