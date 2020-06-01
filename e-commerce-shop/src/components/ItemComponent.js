import React from 'react'
import '../App.css'

export const ItemComponent = ({details, handlePopup, addToCart}) => {
    return (
        <div className='container-fluid'>
             <div id='card-style' className="card mt-5" style={{width: '22rem'}} onClick={() => handlePopup(details.id)} >
                <img src={details.img} className="card-img-top p-3 pl-3" height='250' width='375' alt={details.name} />
                <div className="card-body">
                        <h5 className="card-title">{details.title}</h5>
                        <h5 className="card-text">$ {details.price}</h5>
                </div>
            </div> 
        </div>     
    )
}
