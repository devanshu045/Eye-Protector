// CartState.js (Context Provider)
import React, { useReducer } from "react";
import { REMOVE_ITEM, ADD_TO_CART,SINGLE_ITEM } from "../Type";
import CartContext from "./Cartcontext";
import CartReducer from "./Cartreducer";

const CartState = ({ children }) => {
  const initialValue = {
    showCart: false,
    cartItem: [], 
    singleItem:[],
  };

  const [state, dispatch] = useReducer(CartReducer, initialValue);

  const addTocart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
 
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM,payload: id });
  }

  const addsingleItem = (item) => {
    dispatch({ type: SINGLE_ITEM,payload: item });
  }
  console.log(state.singleItem);

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItem: state.cartItem,
        addTocart,
        removeItem,
        addsingleItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
