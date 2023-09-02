
import CartContext from "../context/cart/Cartcontext"
import { useContext } from "react";

const Cart = () => {
    const {cartItem,removeItem}  =  useContext(CartContext);
  return (
    <div className="cart-container">
    <ul className="cart-items">
      {cartItem.map((item) => (
        <li key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${item.price}</p>
          </div>
          <button onClick={()=>removeItem(item._id)}>Remove it</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Cart