import React from 'react'
import '../App.css'

export const ItemDetails = ({singleItem, closePopup, addToCart}) => {
    return (
    <div className='mt-4'> 
        <div id='popup' className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                   <img src={singleItem.img} className="card-img" alt="..." />
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{singleItem.title}</h3>
                        <h5 className="card-text"><small className="text-muted">{singleItem.company}</small></h5>
                        <p id='info' className="card-text">{singleItem.info}</p>
                        <h3 className="card-text">Starting at: ${singleItem.price}</h3>
                        <button onClick={closePopup} className='btn btn-primary mt-4'>Continue Shopping</button>
                        <button className='btn btn-success mt-4 ml-4 text-light' onClick={() => addToCart(singleItem.id)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
