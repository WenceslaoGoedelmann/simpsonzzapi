import axios from 'axios';


import { BASE_URL } from '../../utils/constants';
import { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from '../../redux/orders/ordersSlice';

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrdersStart());

  try {
    const orders = await axios.get(`${BASE_URL}/orders`, { 
      headers: {
        'x-token': currentUser.token,
      },/* como segundo argumento le paso el headers con el token */
    });
    if (orders) {
      dispatch(fetchOrdersSuccess(orders.data.data));
    }
  } catch (error) {
    console.error({ error });
    dispatch(
      fetchOrdersFail('Oops, algo salío mal. No hay ordenes sin usuario.')
    );
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        'x-token': currentUser.token,
      }, /*  como segundo argumento le paso el body con la orden, como tercer argumento le paso el headers con el token */
    });
    if (response) {
      getOrders(dispatch, currentUser); /* luego de crear la nueva orden, llamo a la funcion anterior para que ya me traiga esta ultima orden y otras mas si las tuviese */
    }
  } catch (error) {
    dispatch(createOrderFail('Oops, algo salío mal.'));
  }
};
