import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ bgColor }) => bgColor || 'var(--btn-gradient)'};
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
   
    font-size: 0.7rem;
    width: 20px;
  height: 20px;
  border-radius: 5px;
   }
`;
