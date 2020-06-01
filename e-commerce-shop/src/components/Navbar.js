import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export const Navbar = () => {
    return (
        <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-primary p-3">
            <Link to='/' className="navbar-brand text-light" style={{fontSize: 25}}>
                <i className='fas fa-mobile' />
                {`  `}
                Best Phones
            </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active ml-3 p-2">
                        <Link to='/' className="nav-link bg-light text-primary" >Products</Link>
                    </li>
                    <li className="nav-item ml-3 p-2">
                        <Link to='/my-cart' className="nav-link text-primary bg-light">
                            <i className='fas fa-shopping-cart pr-2' />
                            My Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
