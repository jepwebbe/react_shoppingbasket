import React from 'react'
import useGetApiDataFromEnpoint from '../../../Hooks/useGetApiDataFromEnpoint';
import { useShoppingCartStore } from '../../ShoppingCart/useShoppingCart/useShoppingCart';

const Products = () => {
    const { state } = useGetApiDataFromEnpoint("products", "items");
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
    <ul>
          {state.map((item, i) => (
            <li key={i}>
              <p>{item.title} {item.price}kr/stk</p>
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
          <button onClick={() => setEmptyCart()}>TØM</button>
        </ul>
  )
}

export default Products