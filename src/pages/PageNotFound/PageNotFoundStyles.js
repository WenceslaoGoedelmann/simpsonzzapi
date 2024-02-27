import styled from 'styled-components';

export const FoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  height: 60vh;
  gap: 5rem;
`;

export const FoundTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  color: black;

  & h1 {
    margin: 0;
  }
  @media (max-width: 768px) {
    p{font-size: 0.6rem;}
  }
`;

export const FoundTitleStyled = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FoundSubtitleStyled = styled.h2`
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
