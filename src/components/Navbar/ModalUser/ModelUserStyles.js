import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-image: url("https://res.cloudinary.com/dtsltqjuw/image/upload/v1703531720/nubes_hlrogg.jpg"); 
  //background-color: #8c87eb;
  //background-color: var(--gray-bg);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 450px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;
  color:black;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      opacity: 90%;
    }
  }
  @media (max-width: 768px) {
    width: 300px;
 }
 @media (max-width: 425px) {
    width: 200px;
    
 }
`;

export const LinkStyled = styled(Link)`
color: black;
font-weight: 600;
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 500;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
