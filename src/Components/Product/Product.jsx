import React from 'react';
import './Product.css';
import pd from '../../Asset/Images/pd.png'
import { Link } from 'react-router-dom';
import ReactStars from 'react-star-rating-component';


const Product = ({product}) => {

    const options={
        name:"pankaj",
        edit :false,
        color: "#4c4c4c",
        activeColor:"#4c4c4c",
        isHalf:true,
        value: product? product.ratings : null,
    }
    // product.images[1]
  return (
    <Link to={`/products/${product._id}`} className='product_box'>
        <div className="row1">
            <img src={pd} alt="product loading" />
        </div>
        <div className="row2">
            <h2>{product.name}</h2>
            <div className="rating">
                <ReactStars {...options} /> <span>{product.numOfReviews} Reviews</span>
            </div>
            <div className="price">${product.price}</div>
        </div>
    </Link>
  )
}

export default Product
