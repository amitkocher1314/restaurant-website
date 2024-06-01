// here we implement our cart-context for providing all values where cart-context imported i.e here all context value which need to
//  be used anywhere in this project can be used
//  and secondly here cartcontext provider wrap files data {props.children} which need to acces cart context value


import { type } from "@testing-library/user-event/dist/type";
import CartContext from "./cart-context";
import React, {useReducer} from "react";

const defaultCartState = {
  item:[],
  totalAmount:0
}

const cartReducerFn = (state,action)=>{
  if(action.type ==='ADD'){
    const updatedItems = state.item.concat(action.items);
    const updatedTotalAmount = state.totalAmount + action.items.price * action.items.amount
    return{
      item: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
   return defaultCartState  //what does cartReducerFn do it return new state 
}

const CartProvider=(props)=>{
  const[cartState,dispatchCartActionFunction] = useReducer(cartReducerFn,defaultCartState)

  const addItemToCartHandler = (items)=>{
  dispatchCartActionFunction({type:'ADD',items:items})
   }
   const removeItemFromCartHandler=(id)=>{

   }
    //Below this object usecase is it is dynamic means it receives data dynamically
    const cartContext = {
        item:cartState.item,
        amount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    
    //now at last value attribute is given to cartcontext provider but why bcz now this value will act as prop and when we enclose our
    //App.js with CartContext provider this value get accessible to all componenet inside hence our work done i.e now we can have value
    //dynamically to our cartContext see in app.js file

  return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider;