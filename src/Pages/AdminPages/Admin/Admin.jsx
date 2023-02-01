import React from 'react';
import './Admin.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faDollar, faMoneyCheck, faPen, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  return (
    <div className='dashboard'>
      <h3 className='admin_heading' >Dashboard</h3>
      <div className="card_container">
        <div className="box">
          <div><FontAwesomeIcon className='icon' icon={faUserAlt} /> </div>
          <h4>Total Users</h4>
          <p>120</p> 
        </div>
        <div className="box">
          <div><FontAwesomeIcon className='icon' icon={faBagShopping} /> </div>
          <h4>Total Products</h4>
          <p>70</p>
        </div>
        <div className="box">
          <div><FontAwesomeIcon className='icon' icon={faDollar} /> </div>
          <h4>Total Sale</h4>
          <p>420</p>
        </div>
        <div className="box">
          <div><FontAwesomeIcon className='icon' icon={faMoneyCheck} /> </div>
          <h4>Total Orders</h4>
          <p>170</p>
        </div>
        <div className="box">
          <div><FontAwesomeIcon className='icon' icon={faPen} /> </div>
          <h4>Total Reviews</h4>
          <p>170</p>
        </div>
      </div>
      
    </div>
  )
}

export default Admin;
