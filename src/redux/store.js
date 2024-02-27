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


const reducers = combineReducers({ /* creo un reducer que contiene a todos los reducers */
    categories: categoriesReducer, /* el "categoriesReducer" en realidad es el categoriesSlice pero cuando lo importe lo renombre a "categoriesReducer" lo mismo pasa con los proximos */
    products: productsReducer,
    recommended: recommendedProductsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
})



const persistConfig = { /* creo el objeto de configuracion para guardar datos en el local storage, luego lo voy a utilizar en persistReducer */
  key: "root", /* los datos los voy a guardar bajo el nombre de root */
  storage, /* esto es una libreria importada */
  whitelist: ['cart', 'user'] /* con esta propiedad indico los reducers que deseeo que se guarden en el local storage, si hago esto se guardaria todos los reducers y por lo general no queremos guardar todos */
};

const persistedReducer = persistReducer(persistConfig, reducers); /* el persistReducer es una libreria que se usa para guardar datos en el local storage */

export const store = configureStore({ /* esta libreria exporta el store */
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);/* esta libreria exporta el persistStore para utilizar el local storage */
