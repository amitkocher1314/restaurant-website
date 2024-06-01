import { useState } from "react";
import Header from "./components/Layout/Header"
import Meal from "./components/Meals/Meal";
import CartForm from "./components/Cart/CartForm";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";
function App() {
  const[clickStatus,setClickStatus] = useState(false);
  const cartShowStatus = ()=>{
    setClickStatus(true)
  }
  const cartHideStatus = ()=>{
    setClickStatus(false)
  }
  return (
    <CartProvider>

    {clickStatus && <CartForm onClick = {cartHideStatus}/>}
    <Header  onClickButton={cartShowStatus}/>
    <main>
    <Meal />
    </main>
    
    </CartProvider>
  )
}

export default App;
