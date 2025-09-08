import React, { useEffect } from "react";
import "./style.css";

import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductSlice";

const Top = () => {
  const { products } = useSelector((state) => state.products);
  const dipatch = useDispatch();
  useEffect(() => {
    dipatch(getProducts());
  }, [dipatch]);

  return (
    <>
      <div id="products">
        <Product products={products} />
      </div>
    </>
  );
};

export default Top;
