import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../utils';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';

const ModalCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    cartItems,
    shippingCost,
    hidden: hiddenCart,
  } = useSelector(state => state.cart); /* de esta forma desectruturo el estado cart */

  const totalPrice = cartItems.reduce( /* calculo el costo de todos los productos */
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    <>
      {!hiddenCart && ( /* si no esta oculto el carrito, muestro el overlay */
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())} /* si toco en el overlay, llamo al reducer toggleHiddenCart */
          isHidden={hiddenCart} /* le paso como prop el hiddenCart */
        />
      )}
      <AnimatePresence>
        {!hiddenCart && ( /* si no esta oculto el carrito lo muestro */
          <ContainerStyled
            initial={{ translateX: 600 }} /* le paso como props la nueva posicion */
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className='close__modal '
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={() => dispatch(clearCart())} /* vacio el carrito */
                  bgColor='var(--magenta)'
                  disabled={!cartItems.length} /* si no hay items lo deshabilito */
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map(item => ( 
                    <ModalCartCard key={item.id} {...item} /> /* si hay items los mapeo y muestro */
                  ))
                ) : (
                  <p>No hay productos todavía</p> /*  si no hay muestro este mensaje */
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>
                  {formatPrice(totalPrice + shippingCost)}
                </PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit onClick={() =>{
                   navigate('/checkout');
                   dispatch(toggleHiddenCart());
                   }}> {/* cuando lo cliqueo redirijo al checkout */}
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;

