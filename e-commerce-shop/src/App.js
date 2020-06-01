import React, { useState } from 'react';
import './App.css';

import { Main } from './components/Main'
import { storeProducts } from './data/data'
import { Routes } from './routes';
import { ItemDetails } from './components/ItemDetails';
import { Modal } from './components/Modal';

function App() {

  const [items] = useState(storeProducts)
  const [selected, setSelected] = useState({})
  const [inCart, setInCart] = useState([])
  const [wasClicked, setClicked] = useState(false)

  const handlePopup = id => {
      setSelected(items[id  - 1])
  }

  const closePopup = () => {
    setSelected({})
  }

  const addToCart = id => {
    const products = [...items]
    const product = products[id - 1]
    product.inCart = true

    setInCart(prevState => {
      return [product, ...prevState]
    })

    setClicked(true) 

    setInterval(() => {
      setClicked(false)
    }, 2000);
  }

  const removeFromCart = id => {
    const arr = [...inCart]

    arr.filter(item => {
        const newArr = arr.filter(item => item.id !== id)

        return setInCart(newArr)
    })
  }
  
  return (
    <div className="App">
       <Routes cartItems={inCart} removeFromCart={removeFromCart} />
       <Main items={items} handlePopup={handlePopup}  />
       {selected.title === undefined ? <div /> : <ItemDetails addToCart={addToCart} singleItem={selected} closePopup={closePopup} />}

       {wasClicked ? 
         <Modal />
       : <div />}
    </div>
  );
}

export default App;
