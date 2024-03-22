import React from 'react';


import Button from '../UI/Button/Button';

import {
  CardPrice,
  ContainerDesc,
  ContainerPrice,
  ProductosCard,
} from './CardsProductosStyles';
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardProducto = ({ img, title, desc, price, id }) => {

  const dispatch = useDispatch()
  return (
    <ProductosCard>
      <img
        src={img}
        alt={title}
      />
      <h3>{title}</h3>
      <ContainerDesc>
      <h4>Ingredientes:</h4>
      <p>{desc}</p>
      </ContainerDesc>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button onClick={() => 
          dispatch(addToCart({ img, title, desc, price, id })) 
        }>Agregar</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
