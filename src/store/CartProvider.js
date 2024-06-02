// here we implement our cart-context for providing all values where cart-context imported i.e here all context value which need to
//  be used anywhere in this project can be used
//  and secondly here cartcontext provider wrap files data {props.children} which need to acces cart context value


import CartContext from "./cart-context";
import React, {useReducer} from "react";

const defaultCartState = {
  item:[],
  totalAmount:0
}

const cartReducerFn = (state,action)=>{
  if(action.type ==='ADD'){
   
    const updatedTotalAmount = state.totalAmount + action.items.price * action.items.amount;
    const existingCartItemIndex = state.item.findIndex((item)=>item.id === action.items.id)
    const existingCartItem = state.item[existingCartItemIndex];
    let updatedItems;


    if(existingCartItem){
    const updatedItem={
        ...existingCartItem,
        amount: existingCartItem.amount + action.items.amount
      };
      updatedItems =[...state.item]
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    else{
     
      updatedItems = state.item.concat(action.items);
    }
    
    
    return{
      item: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  if(action.type ==="REMOVE"){
    const existingCartItemIndex = state.item.findIndex((item)=>item.id === action.id)
    const existingItem =state.item[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount===1){
      updatedItems = state.item.filter((item)=>
        item.id !== action.id
      )
    }
    else{
      const updatedItem = {...existingItem, amount: existingItem.amount-1};
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem
    }
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
  dispatchCartActionFunction({type:'REMOVE',id:id})
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