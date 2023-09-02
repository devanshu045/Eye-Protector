import React from 'react'
import './Singleproduct.css'
import { useContext } from "react";
import Cartcontext from '../context/cart/Cartcontext'

const Singleproduct = () => {
    const {singleItem} = useContext(Cartcontext);
  return (
    <div className="singleitem">
        {singleItem.map((item) => (
        <li key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${item.price}</p>
          </div>
        </li>
      ))}
    </div>
  )
}

export default Singleproduct