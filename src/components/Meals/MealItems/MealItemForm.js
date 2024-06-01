import React, {useRef,useState} from "react";
import styles from "./MealItemForm.module.css";
import InputElement from "../../UI/InputElement";
const MealItemForm = (props)=>{
  const[isAmountValid,setIsAmountValid]=useState(true);
  //now we want that on form submission value get transferred to our context 'addItemToCartHAndler' function one way is 2 binding concept
  //other simple way is we get value from DOM 
 const amountInputRef = useRef();
  
const submitHandler = (event)=>{
    event.preventDefault();


    const enteredAmount = amountInputRef.current.value; //its always in string so converted
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length ===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
       setIsAmountValid(false)
        return
    }
    props.onAddToCart(enteredAmountNumber);
}

return(
<form className={styles.form} onSubmit={submitHandler}>
{/* ref = {amountInputRef} it will work inside custom Input component only if we make some changes inside input component see inside
InputElement component  */}
    
<InputElement 
ref = {amountInputRef}
label="Amount"
 input={{
 id: 'amount',
 type: 'number',
 min: '1',
 max: '5',
 step: '1',
 defaultValue: '1'

}} />
<button>+ Add</button>
{!isAmountValid && <p>Please enter valid amount(1-5)</p>}
</form>
)
}
export default MealItemForm