import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 50%;
  //margin: 0 auto;
  h2 {color:black}
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 280px;
    h2{
      font-size: 1.2rem;
    }
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
