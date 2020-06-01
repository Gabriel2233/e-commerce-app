import React, { useState } from 'react'

import '../App.css'
import { Navbar } from './Navbar'
import {CartItem} from './CartItem';
import { PaymentForm } from './PaymentForm';

export const Cart = ({cartItems, removeFromCart}) => {

    const [confirmation, setConfirmed] = useState(false)
    const [purchased, setPurchased] = useState(false)

    const handlePurchaseButton = () => {
        setPurchased(true)
    }

    const handleConfirm = e => {
        e.preventDefault()
        setConfirmed(true)
        setPurchased(false)
    }

    const pricesArr = []

    for(let i = 0; i < cartItems.length; i++) {
        pricesArr.push(cartItems[i].price)
    }

    const total = pricesArr.length !== 0 && pricesArr.reduce((acc, cur) => acc + cur)

    return ( 
        <div className='cart'>
        <Navbar />
            <div style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
            <h3 style = {{marginTop: 100}}> You currently have <strong>{cartItems.length}</strong> items in the cart </h3>  
            {cartItems.map(item =>
                <CartItem 
                    key = {item.id}
                    removeFromCart = {removeFromCart}
                    item = {item}
                />
            )
         } 
        </div> 

       {cartItems.length > 0 &&
          <div style={{margin: 100}}>
             <h1>Total:  $ {total}</h1>
             <button onClick={() => handlePurchaseButton()} className='btn btn-primary text-light p-2 mt-4'>Purchase</button>
          </div>
       }

       {purchased && cartItems.length > 0 && <PaymentForm  handleConfirm={handleConfirm} />}

       {confirmation && cartItems === []}
    </div>

   )
}