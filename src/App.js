import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import ContainerToast from "./component/Toast/ToastContainer";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Login from "./component/User/Login";
import SignUp from "./component/User/SignUp";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/shipping";
import { useEffect } from "react";
import Store from "./store/store";
import { loadUser } from "./actions/userAction";
import Profile from "./component/User/Profile";
import { useDispatch, useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import Success from "./component/Cart/Success";
import Order from "./component/Orders/Order";
import OrderDetail from "./component/Orders/OrderDetail";
import AdminDashboard from "./component/admin/AdminDashboard.jsx";
import AdminProducts from "./component/admin/AdminProducts.js";
import OrderList from "./component/admin/OrderList";
import ProcessOrder from "./component/admin/ProcessOrder";
import NewProduct from "./component/admin/NewProduct";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/password/update"
            element={
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          />
          <Route exact path="/login/shipping" element={<Shipping />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/order/:id" element={<OrderDetail />} />

          {/* </Admin Routes> */}
          <Route
            exact
            path="/admin/dashboard"
            element={
              <ProtectedRoute isAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/products"
            element={
              <ProtectedRoute isAdmin={true}>
                <AdminProducts />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/orders"
            element={
              <ProtectedRoute isAdmin={true}>
                <OrderList />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/order/:id"
            element={
              <ProtectedRoute isAdmin={true}>
                <ProcessOrder />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/dashboard"
            element={
              <ProtectedRoute isAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/products"
            element={
              <ProtectedRoute isAdmin={true}>
                <AdminProducts />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin/product"
            element={
              <ProtectedRoute isAdmin={true}>
                <NewProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ContainerToast />
    </>
  );
}

export default App;
