import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: center;
  //flex-wrap: wrap;
  gap: 20px;
  padding: 2rem 5rem;
  @media (max-width: 1250px) {
    padding: 2rem 1rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
