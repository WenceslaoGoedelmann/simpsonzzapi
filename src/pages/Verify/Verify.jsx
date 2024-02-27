import React from "react";

import { Formik } from "formik";

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { Form, LoginContainerStyled } from "../Login/LoginStyles";
import { verifyUser } from "../../components/axios/axios.user";
import Loader from "../../components/UI/Loader/Loader";
import { verifyInitialValues } from "../../formik/initialValues";
import { verifyValidationSchema } from "../../formik/validationSchema";
import { useNavigate } from "react-router-dom";
const Verify = () => {

  const navigate = useNavigate();
  return (
    <LoginContainerStyled>
      <h1>Verifica tu Usuario</h1>
      <Formik
        initialValues={verifyInitialValues}
        validationSchema={verifyValidationSchema}
        onSubmit={async (values) => {
          try {
            await verifyUser(values.code, values.email);
            alert("Usuario verificado con exito!!");
            navigate("/");
          } catch (error) {
            alert("Oops, algo salió mal al verificar el usuario");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <LoginInput type="text" name="code" placeholder="Codigo" />
            <LoginInput type="text" name="email" placeholder="Email" />

            <Submit type="button">
              {isSubmitting ? <Loader /> : "Enviar"}
            </Submit>
          </Form>
        )}
      </Formik>
    </LoginContainerStyled>
  );
};

export default Verify;
