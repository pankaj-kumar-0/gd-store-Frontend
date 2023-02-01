import React from 'react';
import './CartItem.css';
import img from '../../Asset/Images/pd.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";


const CartItem = () => {
  return (
    <div className='cart_item'>
        <FontAwesomeIcon icon={faMultiply} id="cancle" />
      <div className="col">
        <img src={img} alt="" />
      </div>
      <div className="col">
        <h4>Samsung Galaxy Note 10 pro</h4>
        <h4>Price <span>$1200</span></h4>
      </div>
      <div className="col">
        <h4>Quantity</h4>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
      </div>
      <div className="col">
        <h4>$1200</h4>
      </div>

    </div>
  )
}

export default CartItem;
