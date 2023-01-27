import React, { useState } from "react";
import styled from 'styled-components'
import useGetApiDataFromEnpoint from "../../../Hooks/useGetApiDataFromEnpoint";
import { useShoppingCartStore } from "../../ShoppingCart/useShoppingCart/useShoppingCart";
import Search from "../../Search/Search";

const Products = () => {
  const { state: products } = useGetApiDataFromEnpoint("products", "items");
  const [searchResults, setSearchResults] = useState([]);
  const {
    cartItems,
    setDeleteItem,
    setEmptyCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCartStore();

  const returnAmount = (id) => {
    const itemAmount = cartItems.find((ci) => ci.id === id)?.amount;
    return itemAmount;
  };

  return (
    <StyledProducts>
      <Search
        products={products}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <ul>
        {searchResults.length > 0
                  ? searchResults.map((item, i) => (
          <li key={i}>
            <p>
              {item.title} {item.price}kr/stk
            </p>
            <button
              onClick={() =>
                increaseCartQuantity(item.id, item.price, 1, item.title)
              }
            >
              Tilføj til kurv
            </button>

            <span>{returnAmount(item.id)}</span>
          </li>
        )) : 
        products.map((item, i) => (
          <li key={i}>
            <p>
              {item.title} {item.price}kr/stk
            </p>
            <button
              onClick={() =>
                increaseCartQuantity(item.id, item.price, 1, item.title)
              }
            >
              Tilføj til kurv
            </button>

            <span>{returnAmount(item.id)}</span>
          </li>
        ))}
      </ul>
    </StyledProducts>
  );
};

const StyledProducts = styled.section`
ul {
  padding-left: 0;
}
`

export default Products;
