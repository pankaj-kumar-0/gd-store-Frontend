import React from 'react';
import CartItem from '../../../Components/CartItem/CartItem';
import './Cart.css';
import Button  from '../../../Components/Button/Button'

const Cart = () => {
  return (
    <div className='cart' >
      <div className="cart_container">
        <h3>Total Cart items <span>2</span></h3>
        <div className="all_cart">
          <CartItem/>
          {/* <CartItem/>
          <CartItem/>
          <CartItem/> */}
        </div>
        <div className="total">
          <h3>Total Ammount $1500</h3>
          <div className="btnbox">
            <Button to_={'/products'} btn_name="Continew Shopping" />
            <Button to_={'/products'} btn_name="Checkout" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
