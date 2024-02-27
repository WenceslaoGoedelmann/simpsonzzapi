import styled from "styled-components";

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 180px);
  }
  @media (max-width: 425px) {
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, 140px);
  }
`;

export const ProductosCard = styled.div`
  background: rgb(255, 217, 15);
  border: 2px black solid;
  height: 320px;
  width: 280px;
  border-radius: 15px;
  padding: 1rem;
  // box-shadow: 10px 5px 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 240px;
    height: 140px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0px;
    font-family: "Montserrat", sans-serif;
    text-shadow: none;
    color: black;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 250px;
  width: 150px;
    img {
      width: 140px;
      height: 80px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 1rem;
      font-weight: 800;
    }
  }
  @media (max-width: 425px) {
    padding: 0.3rem;
    height: 250px;
  width: 130px;
    img {
      width: 120px;
      height: 80px;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 1rem;
      font-weight: 800;
    }
  }
`;
export const ContainerDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h4 {
    font-size: 1.2rem;
    display: flex;
    color: black;
    margin: 6px;
  }
  p {
    
    color: #666;
    margin: 6px;
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction:column;
    gap:5px
  }
  @media (max-width: 425px) {
    flex-direction:column;
    gap:2px
  }
  
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  color: black;
  margin-right: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0px;
  }
`;
