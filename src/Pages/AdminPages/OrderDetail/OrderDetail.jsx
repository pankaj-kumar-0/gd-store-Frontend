import React from 'react';
import './OrderDetail.css'

const OrderDetail = () => {
  return (
    <>
        <h3 className="admin_heading">Orders details</h3>
        <div className="od_detail">
          <div className="box">
            <div className="col1">
              <h3>Shipping Information</h3>
              <h4><span>Name</span>Pankaj Kumar</h4>
              <h4><span>Phone</span>1234567890</h4>
              <h4><span>Address</span>Milak Rampur UP</h4>
            </div>
            <div className="col1">
              <h3>Payment Information</h3>
              <h4><span>Status</span>Paid</h4>
              <h4><span>Ammount</span>$1200</h4>
            </div>
            <div className="col1">
              <h3>Order Information</h3>
              <h4><span>Status</span>Delivered</h4>
            </div>
          </div>
          <div className="box">
            <div className="col">
             <h3>Order Process</h3>
             <select className="admin_input" >
                <option>Select Status</option>
                <option value="1Awaiting payment">Awaiting payment</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
            </select>
            <button className='new_btn' >Process</button>

            </div>
          </div>
        </div>
    </>
  )
}

export default OrderDetail
