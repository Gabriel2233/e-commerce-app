import React from 'react'
import '../App.css'

export const CartItem = ({item, removeFromCart}) => {

    return (
        <div className="card mb-3 p-3 mt-3" style={{width: '90%'}} >
          <div className="row no-gutters">
            <div className="col-md-4">
               <img src={item.img} className="card-img" alt={item.title} height='200' width='80' />
            </div>
            <div className="col-md-8">
               <div className="card-body">
                   <h3 className="card-title">{item.title}</h3>
                   <p className="card-text"><small className="text-muted">{item.company}</small></p>
                   <h1 className="card-text">$ {item.price}</h1>
               </div>
               <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <button id='remove' className='btn btn-danger text-light' 
                        onClick={() => removeFromCart(item.id)}><i className='fas fa-times fa-2x' />
                    </button>
               </div>
               
            </div>
        </div>
    </div>
    )
}
