import { createSlice } from '@reduxjs/toolkit';
import {TotalProducts, products } from '../../data/Products';

const initialState = { /* este seria mi estado de producto, cuando yo acceda a state.products voy a tener los siguietes datos */
  products: products, /* importo el objeto de los productos con todas sus propiedades de los datos */
  totalProducts: TotalProducts, /* importo el total de los productos  de los datos */
  selectedProduct:null
};



export const productsSlice = createSlice({  /* creo el slice de los productos. todos los slice deben contener un name, initalState y los reducer que son las funciones que modifican el estado */
  name: 'products',
  initialState,
  reducers: {
    getProducts: state => state, /* de esta forma exporto el estado de los productos (en este caso el estado va a ser el objeto con los productos) para poder usar este estado en cualquier parte de la pag */
    selectProduct: (state, action) => {
      return {
        ...state,
        selectedProduct: action.payload !== state.selectedProduct ? action.payload : null
      }
    }
  },
});

export const { getProducts, selectProduct } = productsSlice.actions; /* exporto las aciones, que seriar las funciones del reducer */

export default productsSlice.reducer; /* exporto el reducer, el cual voy a usar en el store */
