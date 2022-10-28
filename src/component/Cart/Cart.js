import React, { Fragment, useState } from "react";
import CartItem from "./cartItem";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { addItemsToCart, removeItemFromCart } from "../../actions/cartAction";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link } from "react-router-dom";

function Cart(props) {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const [inputVal, setInputVal] = useState("1");

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    setInputVal(newQty);
    dispatch(addItemsToCart(id, inputVal));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) return;

    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItem = (id) => {
    console.log(id, "id");
    dispatch(removeItemFromCart(id));
  };

  const result = cartItems.reduce(getSum, 0);
  function getSum(total, num) {
    return total + parseInt(num.price);
  }

  console.log(result, "resulst");

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
                    <button onClick={decreaseQuantity}>-</button>
                    <input value={inputVal} defaultValue="23" readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(item.product, inputVal, item.stock)
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
                <p> {`RS:${result}`}</p>
              </div>
              <div></div>
              <div className="checkOutButton">
                <button>check out</button>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}

export default Cart;
