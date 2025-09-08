import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import "./Cart.css"; // Ensure you have appropriate styling
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import { ImStarHalf } from "react-icons/im";
import { IoStarHalfOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { addtoCart } from "../store/ProductSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setbaseQty] = useState(1);
  const [currentImage, setCurrentImage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const item = location.state.item;
    setDetails(item);
    setCurrentImage(item.image); // Set the main image initially
  }, [location]);

  return (
    <div>
      <Header />
      <div className="cart-container">
        <div>
          <div className="main-image">
            <img src={currentImage} alt={details.title} />
          </div>
          <div className="image-thumbnails">
            <img
              src={details.image}
              alt="Thumbnail 1"
              onClick={() => setCurrentImage(details.image)}
              className={currentImage === details.image ? "active" : ""}
            />
            {details.loop && (
              <img
                src={details.loop}
                alt="Thumbnail 2"
                onClick={() => setCurrentImage(details.loop)}
                className={currentImage === details.loop ? "active" : ""}
              />
            )}
            {details.loop2 && (
              <img
                src={details.loop2}
                alt="Thumbnail 3"
                onClick={() => setCurrentImage(details.loop2)}
                className={currentImage === details.loop2 ? "active" : ""}
              />
            )}
          </div>
        </div>
        <div className="product-details">
          <div className="carttit">{details.title}</div>
          <div className="cartcat">
            <pre>
              category:<div className="catt2">{details.category}</div>
            </pre>
          </div>
          <p>
            Learn About Our Passion For Quality Furniture
            <br />
            dolor sit amet, xconsect.
          </p>
          <div className="icons">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarHalfOutline />
            <ImStarHalf />
            <RiStarSLine />
          </div>

          <div className="allcartprice">
            <div className="cartprice">{details.price}</div>

            <span className="old"> {details.oldprice}</span>
          </div>
          <p>suggested payment with 6 months special fianancing</p>

          <div className="addc">
            <button className="cartadd2">buy {details.title}</button>
            <button
              className="minus"
              onClick={() =>
                setbaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
              }
            >
              -
            </button>
            <span>{baseQty}</span>
            <button className="plus" onClick={() => setbaseQty(baseQty + 1)}>
              {" "}
              +
            </button>
          </div>
          <button
            className="cartadd"
            onClick={() => {
              dispatch(
                addtoCart({
                  id: details.id,
                  title: details.title,
                  image: details.image,
                  price: details.price,
                  oldprice: details.oldprice,
                  category: details.category,
                  quantity: baseQty,
                })
              );
              toast.success(`${details.title} is added`);
            }}
          >
            Add to cart
          </button>
          <p>
            {" "}
            <LiaShippingFastSolid /> free delivery on order over 50000${" "}
          </p>
        </div>
      </div>
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
        style={{
          backgroundColor: "transparent",
          color: "#333",
        }}
      />
    </div>
  );
};

export default Cart;
