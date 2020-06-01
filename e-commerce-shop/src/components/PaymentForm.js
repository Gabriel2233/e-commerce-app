import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export const PaymentForm = ({handleConfirm}) => {

    return (
            <div id='payment'>
                 <h2 className='text-primary mb-3'>Confirm your order</h2>

                <form className='bg-primary text-light' onSubmit={handleConfirm}>
                    <div className='input-div'>
                        <label><i className='fas fa-credit-card text-light' />{`  `}Credit card number:</label>
                        <input className='input ml-3 p-2 mt-4 mb-4 mt-3' placeholder='1234 1234 1234 1234' />  
                    </div>

                    <div className='input-div'>
                        <label><i className='fas fa-credit-card text-light' />{`  `}Date of expirement:</label>
                        <input className='input ml-3 p-2 mt-4 mb-4 mt-3' placeholder='MM / YY' />  
                    </div>

                    <div className='input-div'>
                        <label>Card verification code:</label>
                        <div />
                        <input className='input ml-3 p-2 mt-4 mb-4  mt-3' placeholder='000' />  
                    </div>
                        <button className='btn btn-light text-primary p-2 mt-4'>Confirm Purchase</button>
                        <Link to='/'> 
                            <button className='btn btn-danger ml-3 text-light p-2 mt-4'>
                                Cancel
                            </button>
                         </Link>
                </form>
            </div>
    )
}
