import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearError, LoginUser } from "../../../store/Slices/UserSlice";
import STATUSES from "../../../store/Statuses";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../Components/Loader/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const loginhandle = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
  const { status, error ,isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearError());
    }
    if (isAuthenticated) {
      navigate('/')
      toast.success("LoggedIn Successfully");
    }
  }, [ error,isAuthenticated ,navigate ,dispatch]);
  
  return (
    <div className="register">
      
      {status === STATUSES.LOADING ? (
        <Loader/>
      ) : (
        <>
          <div className="form">
            <form onSubmit={loginhandle}>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <div className="btn_box">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </form>

            <p>
              <Link to="/register" className="pass_link">
                Create Account
              </Link>
            </p>
          </div>
        </>
      )}
      <ToastContainer/>
    </div>
  );
};

export default Login;
