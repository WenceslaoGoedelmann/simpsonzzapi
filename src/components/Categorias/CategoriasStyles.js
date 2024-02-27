import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  user-select: none;
  @media (max-width: 768px) {
    gap: 10px;
  }
  @media (max-width: 425px) {
    gap: 5px;
  }
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 150px;
  padding: 2rem 0.5rem;
  border: 2px black solid;
  background-color: ${({ selected }) =>
    selected ? "var(--orange-bg)" : "rgb(255, 217, 15)"};

  border-radius: 15px;
  cursor: pointer;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    text-shadow: none;
    color:black;
  }

  img {
    width: 70px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 80px;
  padding: 0.5rem 0.5rem;
  gap: 0.3rem;
  img {
    width: 50px;
    height: 30px;
  }
  h3 {
    font-size: 0.7rem;
  }

    }

    @media (max-width: 430px) {
    width: 60px;
  padding: 0.3rem 0.2rem;
  gap: 0.1rem;
  border: 1px black solid;
  img {
    width: 40px;
    height: 20px;
  }
  h3 {
    font-size: 0.5rem;
  }

    }
`;



export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--btn-gradient);
  border-radius: 15px;
`;
