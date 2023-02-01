import React from "react";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faDesktop,
  faHeadphones,
  faKeyboard,
  faLaptop,
  faMobile,
  faMouse,
  faTablet,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";


const Category = ({ setCategory }) => {
  const handleCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className="category">
      <h1>Category</h1>
      <ul>
        <li onClick={() => handleCategory(null)} >
           All Products
        </li>
        <li onClick={() => handleCategory("laptop")} >
          <FontAwesomeIcon className="cat_icon" icon={faLaptop} /> Laptop
        </li>

        <li onClick={() => handleCategory("tablet")}>
          <FontAwesomeIcon className="cat_icon" icon={faTablet} /> Tablet
        </li>

        <li onClick={() => handleCategory("mouse")}>
          <FontAwesomeIcon className="cat_icon" icon={faMouse} /> Mouse
        </li>

        <li onClick={() => handleCategory("headphone")}>
          <FontAwesomeIcon className="cat_icon" icon={faHeadphones} /> Headphone
        </li>

        <li onClick={() => handleCategory("keyboard")}>
          <FontAwesomeIcon className="cat_icon" icon={faKeyboard} /> Keyboard
        </li>

        <li onClick={() => handleCategory("phone")}>
          <FontAwesomeIcon className="cat_icon" icon={faMobile} /> Phone
        </li>

        <li onClick={() => handleCategory("desktop")}>
          <FontAwesomeIcon className="cat_icon" icon={faDesktop} /> Desktop
        </li>

        <li onClick={() => handleCategory("camera")}>
          <FontAwesomeIcon className="cat_icon" icon={faCamera} /> Camera
        </li>

        <li onClick={() => handleCategory("watch")}>
          <FontAwesomeIcon className="cat_icon" icon={faWallet} /> Watch
        </li>
      </ul>
    </div>
  );
};

export default Category;
