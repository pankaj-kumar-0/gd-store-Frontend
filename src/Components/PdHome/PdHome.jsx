import React, { useEffect } from "react";
import "./PdHome.css";
import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/Slices/ProductSlice";
import Loader from "../Loader/Loader";
import ErrorBox from "../ErrorBox/ErrorBox";
import STATUSES from "../../store/Statuses";


const PdHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  const { data, status, error } = useSelector((state) => state.products);
  const { products } = data;
  console.log("ppp")
  return (
    <div className="pd_home">
      <h2 className="heading">Featured Products</h2>
      <div className="pd_home_container">
        {status === STATUSES.LOADING ? (
          <Loader />
        ) : status === STATUSES.ERROR ? (
          <ErrorBox message={error.message} />
        ) : (
          <>
            {products &&
              products.map((item, index) => (
                <Product product={item} key={index} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PdHome;
