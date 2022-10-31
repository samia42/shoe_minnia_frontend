import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import ContainerToast from "./component/Toast/ToastContainer";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Login from "./component/User/Login";
import SignUp from "./component/User/SignUp";
import Cart from "./component/Cart/Cart.js";
import { useEffect } from "react";
import Store from './store/store'
import { loadUser } from "./actions/userAction";
import Profile from "./component/User/Profile";
import { useDispatch, useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions";
import { useState } from "react";
import ProtectedRoute from "./component/Route/ProtectedRoute";

function App() {
  const [state,setstate]= useState(false)

  useEffect(()=>{
    Store.dispatch(loadUser())
  },[]);
  const dispatch = useDispatch();
  const {isAuthenticated,user} = useSelector(state=>state.user)
  return (
    <>
      <BrowserRouter>
      {isAuthenticated && <UserOptions user={user}/>}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/' element={<Profile/>}/>
          </Route>
        
        </Routes>
      </BrowserRouter>
      <ContainerToast />
    </>
  );
}

export default App;
