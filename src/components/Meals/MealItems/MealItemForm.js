import React from "react";
import styles from "./MealItemForm.module.css";
import InputElement from "../../UI/InputElement";
const MealItemForm = ()=>{
return(
<form className={styles.form}>
<InputElement label="Amount" input={{
 id: 'amount',
 type: 'number',
 min: '1',
 max: '5',
 step: '1',
 defaultValue: '1'

}} />
<button>+ Add</button>
</form>
)
}
export default MealItemForm