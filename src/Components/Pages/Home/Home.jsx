import React from "react";
import useGetApiDataFromEnpoint from "../../../Hooks/useGetApiDataFromEnpoint";
import { GridOne } from "../../../Styles/GridOne";
import { FooterStyled } from "../../../Styles/Styled.Footer";
import { HeroStyled } from "../../../Styles/Styled.Hero";
import { HomeStyled } from "../../../Styles/Styled.Home";
import { MainStyled } from "../../../Styles/Styled.Main";
import ShoppingCart from "../../ShoppingCart/ShoppingCart";
import { useShoppingCartStore } from "../../ShoppingCart/useShoppingCart/useShoppingCart";
import Products from "./Products";

const Home = () => {
  return (
    <GridOne>
      <HomeStyled>Header</HomeStyled>
      <HeroStyled>Hero</HeroStyled>
      <MainStyled>
        <h2>Main - med Zustand</h2>
        <Products />
        <ShoppingCart />
      </MainStyled>
      <FooterStyled>Footer</FooterStyled>
    </GridOne>
  );
};

export default Home;
