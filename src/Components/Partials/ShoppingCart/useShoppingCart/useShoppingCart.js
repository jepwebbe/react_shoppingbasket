import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export const useShoppingCartStore = create(
  persist(
    (set) => ({
      cartID: uuidv4(),
      cartItems: [],
      // Empty cart
      setEmptyCart: () => set(() => ({ cartItems: [] })),
      // Delete item in cart
      setDeleteItem: (id) =>
        set((state) => ({
          cartItems: [
            ...state.cartItems.filter((item) => {
              return item.id !== id;
            }),
          ],
        })),

      // Increase items by id
      increaseCartQuantity: (id, price, quant, title) =>
        set((state) => {
          if (state.cartItems.find((item) => item.id === id) == null) {
            return {
              cartItems: [
                ...state.cartItems,
                { id: id, price: price, amount: 1 * quant, title: title },
              ],
            };
          } else {
            return {
              cartItems: state.cartItems.map((item) => {
                if (item.id === id) {
                  // if item ecists nby id
                  return {
                    ...item,
                    amount: item.amount + quant || 1,
                  };
                } else {
                  // else return the foind item as is
                  return { ...item };
                }
              }),
            };
          }
        }),
        // Decrease item by id
        decreaseCartQuantity: (id, price, quant) =>
        set((state) => {
          if (state.cartItems.find((item) => item.id === id) == null) {
            return {
              cartItems: [
                ...state.cartItems,
                { id: id, price: price, amount: 1 * quant },
              ],
            };
          } else {
            return {
              cartItems: state.cartItems.map((item) => {
                if (item.id === id) {
                  // if item exists by id
                  return {
                    ...item,
                    amount: item.amount - quant || 1,
                  };
                } else {
                  // else return the found item as is
                  return { ...item };
                }
              }),
            };
          }
        }),

    }),
    {
      name: "zustandCart",
      getStorage: () => localStorage,
    }
  )
);
