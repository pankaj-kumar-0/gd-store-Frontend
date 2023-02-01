import React from 'react';
import './Orders.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Orders = () => {
  return (
    <>
     <h3 className="admin_heading">All Orders</h3> 
     <div className="admin_table">
        <div className="res">
        <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Ammount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>s$#@XY4t33xcf4</td>
            <td>Processing</td>
            <td>2</td>
            <td>$120</td>
            <td><Link to={'/admin/orders/od'} ><FontAwesomeIcon icon={faEye} className="list_icon" /></Link></td>
          </tr>
        </tbody>

      </table>
        </div>
      

     </div>
    </>
  )
}

export default Orders;
