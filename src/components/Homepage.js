import React from 'react'
   
import {  useSelector } from 'react-redux';
export const Homepage = () => {
    const cart= useSelector((state)=>state.reducer1)
    console.log(cart)
    return (
    <div> 
    Cost:  {cart.cost}<br/>
    Quantity: {cart.quantity}
    </div>
  )
}
