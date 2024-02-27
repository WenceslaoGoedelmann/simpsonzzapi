import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 450px;
  height: calc(100vh - 4rem);

  padding: 2rem;
  //background-color: #8c87eb;
  background-image: url("https://res.cloudinary.com/dtsltqjuw/image/upload/v1703531720/nubes_hlrogg.jpg"); 
  border-radius: 1rem 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  color:black;
  @media (max-width: 768px) {
    width: 260px;
  }
  @media (max-width: 375px) {
    
    padding: 2rem 0.8rem;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;

  & h1 {
    margin-top: 0;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const MainContainerStyled = styled.div`
  height: 55%;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 360px;

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

  @media (max-width: 768px) {
    width: 200px;
    img {
    width: 50px;
    height: 50px;

  }
   }
`;
export const InfoContainerStyled = styled.div`
display: flex;

  @media (max-width: 768px) {
   
  flex-direction: column;
  }


`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  @media (max-width: 768px) {
font-size: 15px;
  }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
color:black;
@media (max-width: 768px) {
font-size: 0.7rem;
  }
`;

export const PriceContainerStyled = styled.div`
  //z-index: 1000;
  //background-color: #8c87eb;
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
width: 50px;
margin-right: 5px;
  }
  
`;
