import React from "react";
import { AnimatePresence } from "framer-motion";

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleHiddenMenu,
} from "../../../redux/user/userSlice";
import { ModalOverlayStyled } from "../NavbarStyles";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      {!hiddenMenu /* si no esta oculto el carrito, muestro el overlay */ && (
        <ModalOverlayStyled
          onClick={() =>
            dispatch(toggleHiddenMenu())
          } /* si toco en el overlay, llamo al reducer toggleHiddenCart */
          isHidden={hiddenMenu} /* le paso como prop el hiddenCart */
        />
      )}
      <AnimatePresence>
        {!hiddenMenu /* cuando no esta oculto, muestra el menu */ && (
          <ModalContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ duration: 0.5 }}
            key="cart-user"
          >
            <UsernameStyled>{`Hola ${currentUser?.nombre}`}</UsernameStyled>
            <HrStyled />
            <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
            <span
              onClick={() => {
                dispatch(
                  setCurrentUser(null)
                ); /* cuando apreto en cerrar sesion cambio el estado del current user a null */
                dispatch(toggleHiddenMenu()); /* cierro el menu */
              }}
            >
              Cerrar Sesion
            </span>
          </ModalContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalUser;
