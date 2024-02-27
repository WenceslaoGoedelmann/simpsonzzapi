import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { LayoutWrapper } from './LayoutStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenMenu } from '../../redux/user/userSlice';

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const hiddenMenu = useSelector(state => state.user.hiddenMenu)
  const hiddenCart = useSelector(state => state.cart.hidden)
console.log ({hiddenMenu})
console.log ({hiddenCart})
/*   const {
    hidden: hiddenCart,
  } = useSelector(state => state.cart); */
  const { pathname } = useLocation();

  useEffect(() => {
    if (!hiddenMenu) { /* cuando cambio el path si el menu esta abierto, lo cierro */
      dispatch(toggleHiddenMenu())
    }
    if (!hiddenCart) { /* cuando cambio el path si el carrito esta abierto, lo cierro */
    dispatch(toggleHiddenMenu())
  }
    window.scrollTo(0, 0);
  }, [pathname]);
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
