import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  h1 {
    margin-bottom: 2rem;
    color: yellow;
    text-shadow: 2px 2px  black;
    font-family:  cursive;
    @media (max-width: 768px) {
   
   font-size: 22px;
 }
 @media (max-width: 425px) {
   
   font-size: 18px;
   text-shadow: 2px 2px  black;
 }
  }
  img {
    width: 200px;
    height: 300px;
    @media (max-width: 768px) {
      width: 100px;
    height: 170px;
 }
  }

  @media (max-width: 550px) {
flex-direction: column;
gap: 20px;
 }
`;

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
  @media (max-width: 425px) {
    gap: 10px;
  }
`;

export const HeroSearchBarStyled = styled.input`
  background-color: var(--gray-bg);
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: white;
  @media (max-width: 425px) {
width: 120px;
  }
`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    top: 8px;
  }
`;

export const HeroBtnStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;


