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

  const [value, setValue] = useState(""); 

  const listOfProducts = useSelector((state) => state.products.products).map(
    (product) => product.title
  ); 

  const dispatch = useDispatch();

  const handleSubmit = (e, value) => {
    e.preventDefault();
    
    dispatch(selectCategory(null))

    if(value === ""){ 
      return dispatch(selectProduct(null))
    }

    const newProduct = value.trim().toLowerCase(); 

    const selectedProduct = listOfProducts.find(
      (product) => product.toLowerCase() === newProduct
    ); 

    if (selectedProduct) { 
      dispatch(selectProduct(selectedProduct)); 
      doScroll(); 
    } else {
      return (
        alert("Producto no encontrado"), 
        dispatch(selectProduct(null))
      )
        
      
      
     
    }
  };


  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">¿Qué comida estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            type="text"
            placeholder="Ej. Homero"
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button 
          onClick={(e) => handleSubmit(e, value)} 
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
