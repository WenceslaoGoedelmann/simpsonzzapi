import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from "./HeroStyles";
import { selectCategory } from "../../redux/categories/categoriesSlice";

import homero from "./homero.png";
import { selectProduct } from "../../redux/products/productsSlice";

const Hero = ({ doScroll }) => {

  const [value, setValue] = useState(""); /* creo un nuevo estado en este caso va a ser el valor ingresado en el input */

  const listOfProducts = useSelector((state) => state.products.products).map(
    (product) => product.title
  ); /* de esta forma me creo un array con los nombres de cada producto */

 // console.log(listOfProducts);
  const dispatch = useDispatch();

  const handleSubmit = (e, value) => {
    e.preventDefault();
    
    dispatch(selectCategory(null))

    if(value === ""){ /* si limpio input, muestro todos los productos */
      return dispatch(selectProduct(null))
    }

    const newProduct = value.trim().toLowerCase(); /* al valor ingresado en el input le saco lo espacios adelante y atras y lo paso a minuscula */

    const selectedProduct = listOfProducts.find(
      (product) => product.toLowerCase() === newProduct
    ); /* busco en el listado de produtos si alguno conincide con el producto ingresado y me devuelve un true si lo encuentra o un false si no */

    if (selectedProduct) { /* si lo encotro: */
      dispatch(selectProduct(selectedProduct)); /* paso como payload el producto seleccionado  */
      doScroll(); /* llamo a la funcion que me lleva a la seccion de productos */
    } else {/* si no: */
      return (
        alert("Producto no encontrado"), /* muestro un alert */
        dispatch(selectProduct(null))
      )
        
      
      
     
    }
  };

  /*   
  esto se ulitiza si en vez de querer buscar un producto, quiero buscar una categoria:

  const listOfCategories = useSelector(
    (state) => state.categories.categories
  ).map((category) => category.category);

  const dispatch = useDispatch()

  const handleSubmit = (e, value) => {
    e.preventDefault()

    const newCategory = value.trim().toLowerCase().replace(' ', '') //.split(" ").join('')

    const selectedCategory = listOfCategories.find(
      category => category.toLowerCase() === newCategory
    )
    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory))
      doScroll()
    } else {
      return alert('Categoria no encontrada')
    }
  } */

  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">¿Qué comida estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            value={value}
            onChange={(e) => setValue(e.target.value)} /* llamo a la funcion que me cambia el estado del useState a medida que voy escribiendo en el input*/
            type="text"
            placeholder="Ej. Homero"
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button 
          onClick={(e) => handleSubmit(e, value)}  /* llamo a la funcion del sumbmiteo */
          radius="10">
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img src={homero} />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
