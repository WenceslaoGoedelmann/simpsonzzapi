import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import CartIcon from "./CartIcon/CartIcon";

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  LogoContainerStyled,
} from "./NavbarStyles";
import ModalCart from "./ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import ModalUser from "./ModalUser/ModalUser";

function Navbar() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <LogoContainerStyled>
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/231231/ead009f818f8cac0bcf556e737753189.png"
            alt="Logo"
          />
        </Link>
      </LogoContainerStyled>
      <LinksContainerStyled>
        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>

        <UserNavStyled>
          <UserContainerStyled
            onClick={
              () =>
                currentUser
                  ? dispatch(toggleHiddenMenu())
                  : navigate(
                      "/login"
                    ) /* si hay usuario logueado cuando hago click me abre el menu de info del usuario y si no me lleva al login */
            }
          >
            <SpanStyled>
              {currentUser ? `${currentUser.nombre}` : "Inicia sesión"}{" "}
              {/* si hay usuario me muestra el nombre del usuario y sino muestra inicia sesion */}
            </SpanStyled>
           
          </UserContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
