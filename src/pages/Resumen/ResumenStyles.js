import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
  display: flex;
 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: black;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h1 {
    color: black;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background: var(--gray-bg);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;

    color: black;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  
`;

export const HrStyled = styled.hr`
  margin: 1.5rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: black;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;
