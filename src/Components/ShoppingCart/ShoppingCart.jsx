import React from "react";
import { useShoppingCartStore } from "./useShoppingCart/useShoppingCart";
import styled from "styled-components";

const ShoppingCart = () => {
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
    <CartStyled>
      <ul>
        {cartItems.map((item, ind) => (
          <li key={ind}>
            <p>
              {item.amount} stk {item.title} til {item.price} stk, i alt{" "}
              {item.amount * item.price}
            </p>
            <button onClick={() => setDeleteItem(item.id)}>Fjern</button>
            <button
              onClick={() =>
                increaseCartQuantity(item.id, item.price, 1, item.title)
              }
            >
              +
            </button>
            <button
              onClick={() =>
                returnAmount(item.id) > 1
                  ? decreaseCartQuantity(item.id, item.price, 1)
                  : setDeleteItem(item.id)
              }
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <p>
        Pris i alt{" "}
        <span>
          {cartItems.reduce((a, b) => a + b.amount * b.price, 0) + "kr"}
        </span>
      </p>
    </CartStyled>
  );
};

const CartStyled = styled.article`
  width: 400px;
  height: 500px;
  overflow-y:scroll;
  background-color: green;
`;
export default ShoppingCart;
