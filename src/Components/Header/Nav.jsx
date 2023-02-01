import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const { isAuthenticated, data } = useSelector((state) => state.user);
  const { user } = data;
  return (
    <div className="nav">
      <Link to="/" className="link_item">
        Home
      </Link>
      <Link to="/products" className="link_item">
        Products
      </Link>
      <Link to="/cart" className="link_item">
        About
      </Link>
      <Link to="/cart" className="link_item">
        Contact
      </Link>

      {isAuthenticated ? (
        <Link to="/profile" className="link_item">
          Profile (<span style={{"color":"red"}} >{user.name}</span>)
        </Link>
      ) : null}

      {isAuthenticated ? (
        <>
          {user.isAdmin ? (
            <Link to="/admin" className="link_item" style={{"color":"red"}}>
              Admin
            </Link>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Nav;
