import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import MyStory from "./component/layout/Header/MyStory";
import ContainerToast from "./component/Toast/ToastContainer";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Cart from "./component/Cart/Cart.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <ContainerToast />
    </>
  );
}

export default App;
