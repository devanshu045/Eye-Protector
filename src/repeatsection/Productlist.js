import './Productlist.css'; 
import { useContext } from "react";
import Cartcontext from '../context/cart/Cartcontext'
import { Outlet, Link } from "react-router-dom";
import Singleproduct from './Singleproduct';


const Productlist = ({ products }) => {
  const {addTocart,addsingleItem,singleItem} = useContext(Cartcontext);
  return (
    <div className="products">
      {products.map(product => (
        <button  className="card" key={product._id}  onClick={()=>addsingleItem(product)}  >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.rating}/5</p>
          {singleItem && <Link to="/Singleproduct">See Product Details</Link>}
          
          <button onClick={() =>addTocart(product)}>Add to Cart</button>
        </button>
      ))}
    </div>
  );
};

export default Productlist;
