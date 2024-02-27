import React, { useRef } from "react";

import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion";
import Hero from "../../components/Hero/Hero";

import { CategoriasWrapper, HomeWrapper, ProductosWrapper, RecomendadosWrapper } from "./HomeStyles";

import Categorias from "../../components/Categorias/Categorias";
import CardsProductos from "../../components/Productos/CardsProductos";

function Home() {
  const productsRef = useRef() /* me creo una referencia a la seccion de los produtos de la pagina  */

  const doScroll = () => { /* esta funcion me lleva a la seccion que tengo como referencia */
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y,
    )
  }
  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero doScroll={doScroll}  /> {/* asi le paso la funcion doScroll al componete hero asi cuando en el imput  busco un producto, me lleve a la seccion de productos  */}

      {/* Recomendados Section */}
      <RecomendadosWrapper>
        <h2>Hoy te recomendamos</h2>
        <CardsRecomendacion />
      </RecomendadosWrapper>

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2>Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

      {/* Populares Section*/}
      <ProductosWrapper ref={productsRef} > {/* de esta forma indico a donde estoy haciendo la referencia */}
        <h2>Nuestras comidas</h2>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
