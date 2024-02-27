import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  
  MisOrdenesTitleStyled,
} from './MisOrdenesStyles';
import { useDispatch, useSelector } from 'react-redux';

import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice';
import { getOrders } from '../../components/axios/axios-orders';

const MisOrdenes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders, error } = useSelector(state => state.orders);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>

    </>
  );
};

export default MisOrdenes;
