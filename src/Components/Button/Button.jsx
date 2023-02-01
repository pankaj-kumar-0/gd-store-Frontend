import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({to_ , btn_name}) => {
  return (
    <Link to={to_} className="btn" >
      {btn_name}
    </Link>
  )
}

export default Button
