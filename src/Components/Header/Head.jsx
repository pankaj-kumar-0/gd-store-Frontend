import React, { useState } from "react";
import logo from "../../Asset/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../store/Slices/UserSlice";
import { ToastContainer, toast } from "react-toastify";


const Head = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const handleKeyword = () => {
    if (keyword.trim()) {
      navigate(`/products?keyword=${keyword}`);
    } else {
      navigate("/products");
    }
  };
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(LogoutUser());
    toast.success("LoggedOut Successfully");
  };

  return (
    <div className="head">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="search_box">
        <FontAwesomeIcon icon={faMagnifyingGlass} id="search" />
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span onClick={handleKeyword}>Search</span>
      </div>

      <div className="register_box">
        {isAuthenticated ? (
          <Link id="register" onClick={handleLogout} style={{ color: "red" }}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login" id="register">
              Login
            </Link>
            <Link to="register" id="register">
              Register
            </Link>
          </>
        )}
        <Link to="/cart" id="cart">
          <FontAwesomeIcon icon={faBagShopping} />
        </Link>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Head;
