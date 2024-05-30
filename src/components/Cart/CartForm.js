import React from "react";
import style from "./CartForm.module.css"
import Modal from "../UI/Modal";
const CartForm = (props)=>{
 const cartItem = <ul className={style['cart-items']}>{[
    {
        id:'c1', name:'sushi',amount:2,price: 12.99 
    }
].map((item)=>
    <li>
    {item.name}
    </li>
)}</ul>

    return(
    <Modal>
    {cartItem}
    <div className={style.total}>
        <span>Total Amount</span>
        <span>35.62</span>
    </div>
    <div className={style.actions}>
    <button className={style['button--alt']}>Close</button>
    <button className={style.button}>Order</button>
    </div>
    </Modal>
  )
}

export default CartForm;