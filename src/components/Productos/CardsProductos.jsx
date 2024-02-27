import CardProducto from "./CardProducto";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";
import { ProductosContainer } from "./CardsProductosStyles";
import { ButtonContainerStyled } from "../../pages/Home/HomeStyles";
import { useState } from "react";
import { INITIAL_LIMIT } from "../../utils";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";
import { selectProduct } from "../../redux/products/productsSlice";

const CardsProductos = () => {
  let products = useSelector((state) => state.products.products);
  /* como los productos que voy a mostrar varian en base a los filtros uso let en vez de const */
  /* con el hook useSelector accedo al estado, en este caso me traigo los productos del estado (no los traigo directamente del archivo data) 
  como llego a lo que necesito:
  state: accedo al estado
  state.products: estoy en los reducer del store
  satate.products.products: estoy en productsSlice - initalState - products
  */

  const [limit, setLimit] =
    useState(
      INITIAL_LIMIT
    ); /* me creo un nuevo estado que lo voy a usar para la paginacion */

  const dispatch =
    useDispatch(); /* este hook se utilizar para depachar acciones, en otras palabras utilizar las funciones de los reducers */

  const selectedProducts = useSelector(
    (state) => state.products.selectedProduct
  ); /* busco si hay algun producto seleccionado */

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  ); /* busco si hay alguna categoria seleccionada */

  console.log(selectedCategory)

  const totalProducts = useSelector(
    (state) => state.products.totalProducts
  ); /* me traigo todos los productos */

  if (selectedCategory === "Todos") {
    dispatch(selectCategory(null));
    dispatch(selectProduct(null))
    return
  }

  if (selectedProducts) {
   
    products = products.filter(
      (producto) => producto.title === selectedProducts
    );
    
  }
  if (selectedCategory) {
    dispatch(selectProduct(null));
    products = products.filter(
      (producto) => producto.category === selectedCategory
    );
    
  }

  return (
    <>
      <ProductosContainer>
        {products.map(
          (producto, i) =>
            limit > i ? (
              <CardProducto key={producto.id} {...producto} />
            ) : null /* uso el segundo argumento de metodo map para filtrar la cantidad de productos */
        )}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={() =>
            setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)
          } /* asi reduzco es estado limit, con saltos iguales a initial_limit */
          secondary="true"
          disabled={
            limit === INITIAL_LIMIT
          } /* lo deshabilito si llego al initial_limit */
        >
          <span>Ver menos</span>
        </Button>
        <Button
          onClick={() =>
            setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)
          } /* asi aumento el estado limit, con saltos iguales a initial_limit */
          disabled={
            totalProducts <= limit
          } /* lo deshabilito si llega al total de los productos */
        >
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
