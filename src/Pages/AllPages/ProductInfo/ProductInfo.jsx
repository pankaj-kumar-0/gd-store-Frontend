import React, { useEffect } from "react";
import "./ProductInfo.css";
import { useParams } from "react-router-dom";
import img1 from "../../../Asset/Images/details/img1.png";
import img2 from "../../../Asset/Images/details/img2.png";
import img3 from "../../../Asset/Images/details/img3.png";
import img4 from "../../../Asset/Images/details/img4.png";

import { Slide } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ReactStars from "react-star-rating-component";
import Review from "../../../Components/Review/Review";

import { fetchProductDetail } from "../../../store/Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../Components/Loader/Loader";
import ErrorBox from "../../../Components/ErrorBox/ErrorBox";
import STATUSES from "../../../store/Statuses";


const ProductInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  const { data, status, error } = useSelector((state) => state.productDetail);
  const { product } = data;

  const dataImg = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];

  const options = {
    name: "pankaj",
    edit: false,
    color: "#4c4c4c",
    activeColor: "#4c4c4c",
    isHalf: true,
    value: product ? product.ratings : null,
  };

  return (
    <div className="product_info">
      {status === STATUSES.LOADING ? (
        <Loader />
      ) : status === STATUSES.ERROR ? (
        <ErrorBox message={error.message} />
      ) : (
        product && (
          <>
            <div className="product_info_container">
              <div className="col1">
                <Slide
                  nextArrow={
                    <FontAwesomeIcon className="arro" icon={faArrowRight} />
                  }
                  prevArrow={
                    <FontAwesomeIcon className="arro" icon={faArrowLeft} />
                  }
                  indicators={true}
                  // autoplay={false}
                >
                  {dataImg.map((item, index) => {
                    return (
                      <div key={index} className="slide_pd">
                        <img src={item.img} alt="slide" />
                      </div>
                    );
                  })}
                </Slide>
              </div>
              <div className="col2">
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                <h4>
                  Price<span>${product.price}</span>
                </h4>
                <h4>
                  <ReactStars {...options} />{" "}
                  <span>{product.numOfReviews} Reviews</span>
                </h4>
                <h4>
                  Status{" "}
                  {product.Stock >= 1 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Out of Stcok</span>
                  )}
                </h4>
                <h4>
                  Quantity
                  <span>
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
                  </span>
                </h4>
                <button className="add_to_cart_btn">Add to cart</button>
              </div>
            </div>

            <div className="review_container">
              <div className="box1 box">
                <h3>Write A review</h3>
                <form>
                  <p>Rating</p>
                  <select className="comment_inp">
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <p>Comment</p>
                  <textarea className="comment_inp" rows="3"></textarea>
                  <button className="new_btn">Add Review</button>
                </form>
              </div>
              <div className="box2 box">
                <h3>All Reviews ({product.reviews.length})</h3>

                {product.reviews.length > 0 ? (
                  
                    product.reviews.map((item , index)=>(
                      <Review review= {item} key={item._id} />
                    ))
                  
                ) : (
                  <>
                    <div className="review"> No Reviews Yet</div>
                  </>
                )}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ProductInfo;
