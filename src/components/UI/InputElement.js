import React from "react";
import styles from './InputElement.module.css'
const InputElement = React.forwardRef((props,ref) => {
return(
    <div className={styles.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input  ref={ref} {...props.input} />
    </div>
)
});
export default InputElement;
