import React from 'react';
import Button from '../../../Components/Button/Button';
import './AdminAdd.css';

const AdminAdd = () => {
  return (
    <>
      <div className="admin_heading">Add Product</div>
      <div className="admin_add_pd_box">
      <form className='admin_input_form' >
        <p>Product Name</p>
        <input type="text" placeholder='Type here'  className="admin_input" />

        <p>Product Price</p>
        <input type="number" placeholder='Type here' className="admin_input"/>

        <p>Product Description</p>
        <textarea className="admin_input" rows="3"></textarea>

        <p>Product Category</p>
        <select className="admin_input" >
            <option>Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <p>Product Stock</p>
        <input type="number" placeholder='Type here' className="admin_input" />
        
      </form>
      </div>
      <div className="admin_btnbox">
        <Button to_ ="/admin/products" btn_name="Go to Products" />
        <Button to_ ="/admin/products" btn_name="Add Product" />
      </div>
     
    </>
  )
}

export default AdminAdd
