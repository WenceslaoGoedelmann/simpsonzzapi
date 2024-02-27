import React from "react";
import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";
import { useSelector } from "react-redux";

const Categorias = () => {

  const categories = useSelector((state) => state.categories.categories); /* con el hook useSelector accedo al estado, en este caso me traigo las categorias del estado (no los traigo directamente del archivo data) 
  como llego a lo que necesito:
  state: accedo al estado
  state.categories: estoy en los reducer del store
  satate.categories.categories: estoy en categoriesSlice - initalState - categories
  */

  return (
    <CategoriasContainer>
      {categories.map((category) => (/* creo un nuevo array con las categorias */
        <Categoria key={category.id} {...category} /> /* react me pide que cuando hago un map le asigne una key a cada componente, por lo general se usa el ID. {...category} de esta forma le paso todas las propiedades  como props que tiene el objeto catergory, al componete hijo*/
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
