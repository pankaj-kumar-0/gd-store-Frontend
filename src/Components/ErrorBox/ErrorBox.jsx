import React from "react";
import "./ErrorBox.css";
import img from "../../Asset/Images/wrong.jpg";

const ErrorBox = ({ message }) => {
  return (
    <>
      <div className="wrong_img">
        <img src={img} alt="error" />
      </div>
      <div className="my_error_box">{message}</div>
    </>
  );
};

export default ErrorBox;
