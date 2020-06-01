import React from 'react'

import '../App.css'

import { ItemComponent } from './ItemComponent'

export const Main = ({items, handlePopup, addToCart}) => {

        if (!items) return <div/>
    
        const products = items.map(item => <ItemComponent key={item.id} details={item} handlePopup={handlePopup} addToCart={addToCart} />)
    
        return (
            <div className='flex-main'>
                 <div className='card-grid mt-5'>
                   {products}
                </div>
            </div> 
    )
}

