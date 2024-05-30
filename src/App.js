import { Fragment } from "react";
import Header from "./components/Layout/Header"
import Meal from "./components/Meals/Meal";
import CartForm from "./components/Cart/CartForm";
function App() {
  return (
    <Fragment>
    <CartForm />
    <Header />
    <main>
    <Meal />
    </main>
    
    </Fragment>
  )
}

export default App;
