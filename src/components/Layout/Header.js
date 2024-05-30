import React, {Fragment} from "react";
import mealimage from '../../assests/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
import style from "./Header.module.css"
const Header = (props) =>{
    return(
        <Fragment>
            <header className={style.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onClickButton} />
            </header>
            <div className={style['main-image']}>
            <img src={mealimage} alt="Please select your favourite food" />
            </div> 
        </Fragment>
    )
}

export default Header;