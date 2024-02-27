import React from 'react';

import { BorderDecoration, CardCategoria } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

export const Categoria = ({ img, title, category }) => { /* de esta forma desectructuro las propiedades de category */
  const selectedCategory = useSelector(state => state.categories.selectedCategory) /* me traigo del estado la categoria seleccionada */

  const dispatch = useDispatch() /* este hook se utilizar para depachar acciones, en otras palabras utilizar las funciones de los reducers */

  return (
    <CardCategoria
    selected={category === selectedCategory} /* si el category pasado como parametro es igual al selectedCategory el selected es true y cambia el background (ver en los stilos)*/
    onClick={() => dispatch(selectCategory(category))} /* lo que paso como parametro dentro de la funcion es el payload en este caso la category */
    whileTap={{ scale: 0.95 }} /* cuando hago un click sobre el componente, se achica. */
    >
      <img
        src={img}
        alt={title}
      />
      <h3>{title}</h3>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
