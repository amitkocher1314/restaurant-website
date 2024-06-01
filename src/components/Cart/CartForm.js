import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import style from "./CartForm.module.css"
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const CartForm = (props)=>{
  const CartCtx = useContext(CartContext)

  const totalAmount = `$${CartCtx.amount.toFixed(2)}`;
  const hasItem = CartCtx.item.length>0;

  const addItemToCartHAndler =()=>{};
  const removeItemFromCartHandler=()=>{}

 const cartItem = <ul className={style['cart-items']}> {CartCtx.item.map((item)=>
(
    <CartItem key={item.id}
    name={item.name}
    price={item.price}
    amount={item.amount}
    onRemove = {removeItemFromCartHandler.bind(null,item.id)}
    onAdd = {addItemToCartHAndler.bind(null,item)}
    />
)    
)}</ul>

    return(
    <Modal onClose={props.onClick}>
    {cartItem}
    <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    <div className={style.actions}>
    <button className={style['button--alt']} onClick={props.onClick}>Close</button>
    {hasItem && <button className={style.button}>Order</button>}
    </div>
    </Modal>
  )
}

export default CartForm;