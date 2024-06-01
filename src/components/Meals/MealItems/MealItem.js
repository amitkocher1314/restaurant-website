import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import style from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount)=>{
     cartCtx.addItem({
      id:props.id,
      amount:amount,
      price:props.price,
      name:props.name
     })
  }

    return(
    <li className={style.meal}>
        <div>
            <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
       </div>
       <div>
        <MealItemForm onAddToCart={addToCartHandler} />
       </div>
    </li>
  )
}
export default MealItem;