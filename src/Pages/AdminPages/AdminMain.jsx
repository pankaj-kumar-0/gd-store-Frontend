import React from 'react';
import { Link, Outlet} from "react-router-dom";
import './AdminMain.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faBagShopping, faCartPlus, faHome, faList,  faUser } from "@fortawesome/free-solid-svg-icons";

import logo from '../../Asset/Images/logo.png';

const AdminMain = () => {
  return (
    <div className='admin'>


        <div className="sidebar">
          <Link to='/'><img src={logo} alt="logo_" /></Link>
            
            <ul>
                <li> <Link to={'/admin'} className='admin_link'><FontAwesomeIcon className='admin_icon' icon={faHome} /> Dashboard</Link> </li>
                <li> <Link to={'/admin/products'} className='admin_link'><FontAwesomeIcon className='admin_icon' icon={faBagShopping} /> Products</Link> </li>
                <li> <Link to={'/admin/addproduct'} className='admin_link'><FontAwesomeIcon className='admin_icon' icon={faCartPlus} />Add Products</Link> </li>
                <li> <Link to={'/admin/users'} className='admin_link'><FontAwesomeIcon className='admin_icon' icon={faUser} />Users</Link> </li>
                <li> <Link to={'/admin/orders'} className='admin_link'><FontAwesomeIcon className='admin_icon' icon={faList} />Orders</Link> </li>
                <li> <Link to={'/admin/reviews'} className='admin_link'><FontAwesomeIcon className='admin_icon' icon={faAddressBook} />Reviews </Link> </li>

            </ul>
        </div>


        <div className="main_box">

            <Outlet/>
        </div>
        
    </div>
  )
}

export default AdminMain
