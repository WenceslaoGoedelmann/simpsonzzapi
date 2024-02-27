import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import { useDispatch } from 'react-redux';

import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { useLocation} from "react-router-dom";

import { createUser } from '../../components/axios/axios.user';
import { setCurrentUser } from '../../redux/user/userSlice';
import Loader from '../../components/UI/Loader/Loader';
import { useRedirect } from '../../hooks/useRedirect';

const Register = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/verify');
 

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={ async (values, actions) => {
          const user = await createUser(values.name, values.email, values.cellphone, values.location, values.address, values.password)
          actions.resetForm()
          //actions.preventDefault()
          if (user) {
            dispatch(setCurrentUser({ /* paso como payload la respuesta del create user */
              ...user.usuario, 
              token: user.token /*  el formato de la respuesta lo veo en la documentacion de la api*/
            }))
          }
        }}
      >
        {({ isSubmitting }) => ( 
        <Form>
        <LoginInput type="text" name="name" placeholder="Nombre" >Nombre</LoginInput>
        <LoginInput type="text" name="email" placeholder="Email" >Email</LoginInput>
          <LoginInput type="number" name="cellphone" placeholder="Celular" >Celular </LoginInput>
          <LoginInput type="text" name="location" placeholder="Ciudad" >Ciudad</LoginInput>
          <LoginInput type="text" name="address" placeholder="Dirección" >Dirección</LoginInput>
          <LoginInput type="password" name="password" placeholder="Contraseña" >Contraseña</LoginInput>
          <LoginInput type="password" name="passwordConfirmation" placeholder="Repetir contraseña" >Repetir contraseña</LoginInput>
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e => e.preventDefault()}
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='button'>
          {isSubmitting ? <Loader /> : 'Registrarte'}            
          </Submit>
        </Form>
        )}
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
