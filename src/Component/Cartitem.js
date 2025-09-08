import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import "./cartitem.css";
import {
  deleteItem,
  resetcart,
  DecrementtQuantity,
  increamentQuantity,
} from "../store/ProductSlice";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Cartitem = () => {
  const dispatch = useDispatch();

  const { productData } = useSelector((state) => state.products);

  return (
    <>
      <div className="cartitem1">
        <div>
          <h2>Shopping Cart</h2>
        </div>
        <div>
          {productData.map((item) => (
            <div key={item.id} className="maincard2">
              <div className="photo">
                <IoMdClose
                  onClick={() =>
                    dispatch(deleteItem(item.id)) &
                    toast.error(`${item.title} is removed`)
                  }
                />
                <img src={item.image} />
              </div>
              <div className="cont">
                <div className="twxt">
                  <div className="nameofbook">{item.name}</div>
                  <div className="nameofauthor">{item.price}$</div>
                </div>

                <div className="buts">
                  <button
                    style={{ border: "1px solid" }}
                    aria-label="Decrement value"
                    onClick={() =>
                      dispatch(
                        DecrementtQuantity({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          oldprice: item.oldprice,
                          price: item.price,
                          quantity: 1,
                        })
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    <div> {item.quantity} </div>
                  </span>
                  <button
                    style={{ border: "1px solid" }}
                    aria-label="Increment value"
                    onClick={() =>
                      dispatch(
                        increamentQuantity({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          oldprice: item.oldprice,
                          price: item.price,
                          quantity: 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <p className="pp"> {item.price * item.quantity}$</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="outline-danger"
          onClick={() =>
            dispatch(resetcart()) & toast.error(`your cart is Empty`)
          }
        >
          {" "}
          Resst cart
        </Button>{" "}
        <Link
          to="/"
          style={{
            color: "transparent",
          }}
        >
          <button
            style={{
              marginTop: "8px",
              marginLeft: "7px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "gray",
              transition: "color 300ms",
              border: "none",
              backgroundColor: "transparent",
              textDecoration: "none !important",
            }}
          >
            <span>
              <HiOutlineArrowLeft />
            </span>
            go shopping
          </button>
        </Link>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default Cartitem;
