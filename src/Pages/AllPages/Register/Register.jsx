import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../../store/Statuses";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../../Components/Loader/Loader";
import { clearError, RegisterUser } from "../../../store/Slices/UserSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerhandle = (e) => {
    e.preventDefault();
    dispatch(RegisterUser({ name, email, password }));
  };

  const { status, error, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearError());
    }
    if (isAuthenticated) {
      navigate('/')
      toast.success("Registered Successfully");
    }
  }, [error, isAuthenticated ,navigate ,dispatch]);

  return (
    <div className="register">
      {status === STATUSES.LOADING ? (
        <Loader />
      ) : (
        <>
          <div className="form">
            <form onSubmit={registerhandle}>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
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
                  Register
                </button>
              </div>
            </form>

            <p>
              I have account
              <Link to="/login" className="pass_link">
                Login
              </Link>
            </p>
          </div>
        </>
      )}
      <ToastContainer/>
    </div>
  );
};

export default Register;
