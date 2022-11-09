import React, { Fragment, useState } from "react";
import CartItem from "./cartItem";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { addItemsToCart, removeItemFromCart } from "../../actions/cartAction";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useLocation } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";
// import { Toast } from "react-toastify/dist/components";

function Cart(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const redirect = location.search ? location.search.split("=")[1] : "";

  const deleteCartItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const result = cartItems.reduce(getSum, 0);
  function getSum(total, num) {
    return total + parseInt(num.price);
  }

  const cartHandler = () => {
    navigate("/login?redirect=shipping");
    // if (isAuthenticated) {
    //   navigate("/shipping");
    // } else {
    //   // Toast("first login ", "success");
    //   navigate("/login");
    // }
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="no-cart-item">
          <RemoveShoppingCartIcon
            style={{ color: cartItems.length ? "red" : "unset" }}
          />
          <p>No Item in Cart</p>
          <Link to="/products">view Products</Link>
        </div>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>quantity</p>
              <p>Sub Total</p>
            </div>
            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItem item={item} deleteCartItems={deleteCartItem} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input value={item?.quantity} defaultValue="23" readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +{" "}
                    </button>
                  </div>
                  <p className="cartSubtotal">{`RS ${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>
                  {`Rs:${cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )}
                  `}
                </p>
              </div>
              <div></div>
              <div className="checkOutButton">
                <button onClick={cartHandler}>check out</button>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}

export default Cart;
