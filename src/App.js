import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./Pages/Main";
import Admin from "./Pages/AdminPages/Admin/Admin";
import Products from "./Pages/AllPages/Products/Products";
import Cart from "./Pages/AllPages/Cart/Cart";
import Home from "./Pages/AllPages/Home/Home";
import ScrollToTop from "./Components/ScrollToTop";
import Register from "./Pages/AllPages/Register/Register";
import Login from "./Pages/AllPages/Register/Login";
import ProductInfo from "./Pages/AllPages/ProductInfo/ProductInfo";
import AdminProducts from "./Pages/AdminPages/AdminProducts/AdminProducts";
import AdminMain from "./Pages/AdminPages/AdminMain";
import AdminAdd from "./Pages/AdminPages/AdminAdd/AdminAdd";
import Orders from "./Pages/AdminPages/Orders/Orders";
import Users from "./Pages/AdminPages/Users/Users";
import Reviews from "./Pages/AdminPages/Reviews/Reviews";
import OrderDetail from "./Pages/AdminPages/OrderDetail/OrderDetail";
import AdminUpdatePd from "./Pages/AdminPages/AdminAdd/AdminUpdatePd";
import NotFound from "./Components/NotFound/NotFound";
import Profile from "./Pages/AllPages/Profile/Profile";


// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { UserDetail } from "./store/Slices/UserSlice";
import STATUSES from "./store/Statuses";
import UpdateProfile from "./Pages/AllPages/UpdateProfile/UpdateProfile";
import AllOrders from "./Pages/AllPages/AllOrders/AllOrders";
import { ToastContainer } from "react-toastify";
import ViewUser from "./Pages/AdminPages/ViewUser/ViewUser";


function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, data, status } = useSelector((state) => state.user);
  const { user } = data;

  useEffect(() => {
    dispatch(UserDetail({}));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductInfo />} />
            <Route path="cart" element={<Cart />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            {status === STATUSES.SUCCESS ? (
              <>
                {isAuthenticated ? (
                  <>
                    <Route path="profile" element={<Profile />} />
                    <Route path="profile/update" element={<UpdateProfile />} />
                    <Route path="profile/orders" element={<AllOrders />} />
                  </>
                ) : (
                  <Route path="*" element={<Navigate to="login" />} />
                )}
              </>
            ) : null}
          </Route>


          {/* ======= Admin pages ========= */}
          {status === STATUSES.SUCCESS ? (
            <>
              {isAuthenticated ? (
                <>
                  {user.isAdmin ? (
                    <Route path="admin" element={<AdminMain />}>
                      <Route index path="" element={<Admin />} />
                      <Route path="products" element={<AdminProducts />} />
                      <Route path="addproduct" element={<AdminAdd />} />
                      <Route path="addproduct1" element={<AdminUpdatePd />} />
                      <Route path="orders" element={<Orders />} />
                      <Route path="orders/od" element={<OrderDetail />} />
                      <Route path="users" element={<Users />} />
                      <Route path="users/:id" element={<ViewUser />} />
                      <Route path="reviews" element={<Reviews />} />
                    </Route>
                  ) : (
                    null
                  )}
                </>
              ) : <Route path="*" element={<Navigate to="login" />} />}
            </>
          ) : null}


          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
