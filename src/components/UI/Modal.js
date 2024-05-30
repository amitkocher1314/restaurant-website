import React, {Fragment} from "react";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
return(
    <div className={style.backdrop} onClick={props.onClick}></div>
)
}

const ModalOverlay = (props) =>{
return(
    <div className={style.modal}>
     <div className={style.content}>{props.children}</div>
    </div>
)
}
const modalLoc = document.getElementById("overlays");

const Modal =(props)=>{
    
 return(
    <Fragment>   
     {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,modalLoc)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,modalLoc)}
    </Fragment>
 )
}
export default Modal