import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.div`
  height: 70px;
  background-color: rgb(255, 217, 15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  border-radius: 0px 0px 15px 15px;
  border: 2px solid black;
  border-top: 0px;
  @media (max-width: 768px) {
    height: 55px;
    padding: 0px 30px 0px 20px;
  }
`;
export const LogoContainerStyled = styled.div`
  img {
    height: 45px;
    width: 230px;
  }
  @media (max-width: 768px) {
    img {
      height: 20px;
      width: 100px;
    }
  }

  @media (max-width: 425px) {
    padding: 1rem 0.5rem;
  }
`;
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;

  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 425px) {
    gap: 20px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.5rem;
  color: black;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const CartNavStyled = styled.div`
  font-size: 40px;
  color: white;
  cursor: pointer;
  position: relative;
  @media (max-width: 750px) {
    font-size: 16px;
  }

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    text-align: center;
    background: #fb103d;
    color: white;
    font-size: 10px;
    font-weight: 500;
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1px;
    border-radius: 50%;
    @media (max-width: 768px) {
      font-size: 8px;
      height: 15px;
      width: 15px;
    }
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: black;
    font-size: 1.2rem;
    font-weight: 800;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    span {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 425px) {
    gap: 5px;
    span {
      margin-right: 0px;
    }
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
