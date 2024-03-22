import { createSlice } from '@reduxjs/toolkit';
import {TotalProducts, products } from '../../data/Products';

const initialState = { 
  products: products, 
  totalProducts: TotalProducts, 
  selectedProduct:null
};



export const productsSlice = createSlice({  
  name: 'products',
  initialState,
  reducers: {
    getProducts: state => state, 
    selectProduct: (state, action) => {
      return {
        ...state,
        selectedProduct: action.payload !== state.selectedProduct ? action.payload : null
      }
    }
  },
});

export const { getProducts, selectProduct } = productsSlice.actions; 

export default productsSlice.reducer; 
