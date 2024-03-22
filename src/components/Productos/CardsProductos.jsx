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


  const [limit, setLimit] =
    useState(
      INITIAL_LIMIT
    ); 

  const dispatch =
    useDispatch(); 

  const selectedProducts = useSelector(
    (state) => state.products.selectedProduct
  ); 

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  ); 

  const totalProducts = useSelector(
    (state) => state.products.totalProducts
  ); 

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
            ) : null 
        )}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={() =>
            setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)
          } 
          secondary="true"
          disabled={
            limit === INITIAL_LIMIT
          } 
        >
          <span>Ver menos</span>
        </Button>
        <Button
          onClick={() =>
            setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)
          } 
          disabled={
            totalProducts <= limit
          } 
        >
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
