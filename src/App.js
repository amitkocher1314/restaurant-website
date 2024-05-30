import { Fragment, useState } from "react";
import Header from "./components/Layout/Header"
import Meal from "./components/Meals/Meal";
import CartForm from "./components/Cart/CartForm";
function App() {
  const[clickStatus,setClickStatus] = useState(false);
  const cartShowStatus = ()=>{
    setClickStatus(true)
  }
  const cartHideStatus = ()=>{
    setClickStatus(false)
  }
  return (
    <Fragment>

    {clickStatus && <CartForm onClick = {cartHideStatus}/>}
    <Header  onClickButton={cartShowStatus}/>
    <main>
    <Meal />
    </main>
    
    </Fragment>
  )
}

export default App;
