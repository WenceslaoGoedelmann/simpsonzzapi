import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/Categories";



const initialState = { /* este seria mi estado de categoria, cuando yo acceda a state.categories voy a tener los siguietes datos */
  categories: Categories, /* importo el objeto de las categorias con todas sus propiedades de los datos */
  selectedCategory: null /* creo una nueva variable para saber que caletegoria esta seleccionada */
};

export const categoriesSlice = createSlice({ /* creo el slice de las categorias. todos los slice deben contener un name, initalState y los reducer que son las funciones que modifican el estado */
  name: "categories",
  initialState: initialState,
  reducers: {
    getCategories: state => state, /* de esta forma exporto el estado de las categorias (en este caso el estado va a ser el objeto con las categorias) para poder usar este estado en cualquier parte de la pag */
    selectCategory: (state, action) => { /* cuando llamo a esta funcion le paso dos parametros el estado y la acciono */    return {
        ...state,
        selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
        /* el payload es una informacion que le paso al reducer desde el dispach (en este caso cuando cliqueo una card de catergoria) */
      }
    }
  },
});

export const { getCategories, selectCategory } = categoriesSlice.actions; /* exporto las aciones, que seriar las funciones del reducer */

export default categoriesSlice.reducer; /* exporto el reducer, el cual voy a usar en el store */
