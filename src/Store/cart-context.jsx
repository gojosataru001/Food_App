import React from 'react'

const CartContext = React.createContext({
    items:[],
    totalAmout:0,
    addItem:()=>{},
    removeItem:() => {}

})

export default CartContext