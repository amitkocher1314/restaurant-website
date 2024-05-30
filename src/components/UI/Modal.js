import React, {Fragment} from "react";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = () => {
return(
    <div className={style.backdrop}></div>
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
     {ReactDOM.createPortal(<Backdrop />,modalLoc)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,modalLoc)}
    </Fragment>
 )
}
export default Modal