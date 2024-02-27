import React from "react";

import Button from "../UI/Button/Button";
import { formatPrice } from "../../utils/index";
import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from "./CardsRecomendacionStyled";
import { addToCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";

const CardRecomendacion = ({ title, desc, price, img, id }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={() => dispatch(addToCart({ title, desc, price, img, id }))} /* llamo a la funcion addToCart y le paso como payload todas las propiedades del producto */
      >
        Agregar
      </Button>
    </Card>
  );
};

export default CardRecomendacion;
