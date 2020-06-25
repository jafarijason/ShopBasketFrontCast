import React, { useContext } from 'react'

import './Product.css'
import { CartContext } from './../shared/context/cart-context';

const Product = props => {

  const [cartItems, setCartItems] = useContext(CartContext)

  const addTocart = () => {
    const product = { title: props.title, price: props.price }
    setCartItems((currState) => {
      return [...currState, product]
    })


  }

  return (
    <div className="product">
      <p>{props.title}</p>
      <p>{props.price}</p>
      <button className="btn" onClick={addTocart} >Add To card</button>
    </div>
  );
}

export default Product; 