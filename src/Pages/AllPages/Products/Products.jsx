import React, { useEffect, useState } from "react";
import "./Products.css";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Category from "../../../Components/Category/Category";
import ErrorBox from "../../../Components/ErrorBox/ErrorBox";
import Loader from "../../../Components/Loader/Loader";
import Product from "../../../Components/Product/Product";
import { fetchProducts } from "../../../store/Slices/ProductSlice";
import STATUSES from "../../../store/Statuses";
// import { ToastContainer, toast } from 'react-toastify';

const Products = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const keyword = searchParams.get("keyword") || "";
  const [category, setCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts({ keyword, category, currentPage }));
  }, [dispatch, keyword, category, currentPage]);

  const { data, status, error } = useSelector((state) => state.products);
  const { products, all_product } = data;

  // console.log(category);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  return (
    <div className="products_page">
    
      <Category setCategory={setCategory} />
      <h1 className="heading"> All Products</h1>
      <div className="products_section">
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
      {products && (
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={2}
              totalItemsCount={all_product}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        )}
    </div>
    
  );
};

export default Products;
