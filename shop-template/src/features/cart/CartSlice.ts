import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CartItem } from "../../models/CartItem";
import { Product } from "../../models/Product";

export interface CartState {
  [key: number]: CartItem;
}

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      if (state[action.payload.id] === undefined) {
        const newCartItem: CartItem = {
          id: action.payload.id,
          product_name: action.payload.product_name,
          short_description: action.payload.short_description,
          price: action.payload.price,
          image: action.payload.image,
          company: action.payload.company,
          count: 1,
        };
        state[action.payload.id] = newCartItem;
      } else {
        state[action.payload.id].count += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const getCart = (state: RootState) => state;
export const getCartSize = (state: RootState) => Object.keys(state.cart).length;

export default cartSlice.reducer;
