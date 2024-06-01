// STEP 1 MAKE DEFAULT CONTEXT

import React from "react";

const CartContext=React.createContext({
    item:[],
    amount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export default CartContext;
