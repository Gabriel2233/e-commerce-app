import React from 'react'

import { Navbar } from './components/Navbar'
import { Main } from './components/Main'
import { ItemDetails } from './components/ItemDetails'
import { Cart } from './components/Cart'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const Routes = ({cartItems, removeFromCart}) => {
    return (
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/item-details' exact component={ItemDetails} />
            <Route path='/my-cart' exact>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </Route>
        </Switch>
    </Router>
    )
}
