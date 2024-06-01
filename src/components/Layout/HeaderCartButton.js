//step1 import CartContext not contextProvider
//step2 usecase of useContext is that when any changes occur inside Context react revaluate this page i.e dynamic action
//when any changes means inside Cart Provider we do any changes bcz we know all changes are done there in app.js by us
//finally our connection established using use context
//can see use of reduce function at video 13 at 3:20 min  its super easy
import React, {useContext}  from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
  const cartCtx =  useContext(CartContext)
   
  const numberOfCartItems = cartCtx.item.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0)
  
   return(
    <button  className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
         <CartIcon />
        </span>
        <span>
          Your Cart
        </span>
        <span className={classes.badge}>
         {numberOfCartItems}
        </span>
    </button>
   )
}
export default  HeaderCartButton;