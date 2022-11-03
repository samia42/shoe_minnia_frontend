import React from "react";

import { addItemsToCart } from "../../actions/cartAction";
import { Link } from "react-router-dom";
import "./cart.css";
import image from "../../images/Profile.png";
function cartItem({ item, deleteCartItems }) {
  return (
    <div className="cartItemCard">
      <img src={item.image} />
      <div className="item-name">
        <Link to={`/product/${item.product._id}`}>{item.name}</Link>
        <span>{`Price Rs${item.price}`} </span>
        <p onClick={() => deleteCartItems(item.product)}>remove</p>
      </div>
    </div>
  );
}

export default cartItem;
