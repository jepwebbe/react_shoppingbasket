import React, { useState } from "react";
import useGetApiDataFromEnpoint from "../../../Hooks/useGetApiDataFromEnpoint";
import { useShoppingCartStore } from "../../ShoppingCart/useShoppingCart/useShoppingCart";
import Search from "./Search";

const Products = () => {
  const { state: products } = useGetApiDataFromEnpoint("products", "items");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)
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
    <>
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
    </>
  );
};

export default Products;
