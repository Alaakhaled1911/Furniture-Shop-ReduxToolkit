import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bestsales } from '../store/ProductSlice';
import BestSales from './BestSales';
import './best.css'
import { IoIosArrowRoundForward } from "react-icons/io";

const Best = () => {
  const { bestsales } = useSelector((state) => state.products); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(Bestsales());
  }, [dispatch]);

  return (
    <>
    <div className="bst">
      <div>
     <p>Our Best Selling Products</p>
  <br/>
     <button>Shopping Now 
     <IoIosArrowRoundForward />
     </button>
     </div>
      
      <BestSales bestproducts={bestsales} />
      
      </div>
    </>
  );
};

export default Best;
