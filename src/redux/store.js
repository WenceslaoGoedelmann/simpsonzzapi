import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from './cart/cartSlice'
import ordersReducer from './orders/ordersSlice'
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import recommendedProductsReducer from './recommended/recommendedProductsSlice';
import productsReducer from "./products/productsSlice";
import userReducer from './user/userSlice'


const reducers = combineReducers({ 
    categories: categoriesReducer, 
    products: productsReducer,
    recommended: recommendedProductsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
})



const persistConfig = { 
  key: "root", 
  storage, 
  whitelist: ['cart', 'user']
};

const persistedReducer = persistReducer(persistConfig, reducers); 

export const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
