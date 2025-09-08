import React, { useState } from 'react'
import Header from './Header'
import Cartitem from './Cartitem'
import { useDispatch,useSelector } from 'react-redux';
import { BiCart } from "react-icons/bi";
import { useEffect } from 'react';
import './cart2.css'
import { toast } from 'react-toastify';
const Shippingcard = () => {
  const { productData } = useSelector((state) => state.products);
  const { userInfo } = useSelector((state) => state.products);
  const [totalAmt, setTotalAmt]= useState('');
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  console.log(productData);
  const Handlecheckout = () => {
    if(userInfo)
      {
        setPayNow(true)
      }
      else{
        toast.error("please sign in to Checkout");
      }
  }
  return (
    <div>
        <Header />
        <div className="checkout">
      

      <Cartitem />

<div >
  <h4> Cart Total </h4>
<div className="total">
  <p className='subcartshp'>SubTotal <span className='totcartshp'>$ {totalAmt}</span> </p>
  <p>Shipping <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.</span> </p>
  <hr/>
  <p className='subcartshp'>Total <span className='totcartshp'>${totalAmt} </span> </p>
  <button className='shipcart' onClick={Handlecheckout}>Processed to Checkout</button>
   
</div>
</div> 
    </div>
    </div>
  )
}

export default Shippingcard