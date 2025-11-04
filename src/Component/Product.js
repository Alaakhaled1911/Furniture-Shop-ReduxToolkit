import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSpring } from "framer-motion";
import { motion, useScroll } from "framer-motion";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineArrowRight } from "react-icons/ai";
import { addtoCart } from "../store/ProductSlice";
import "./product.css";
import { useDispatch } from "react-redux";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      StaggerChildren: 0.1,
    },
  },
};

const Product = ({ products }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllProductsClick = () => {
    setSelectedCategory(null);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const productsList = filteredProducts?.map((item) => {
    const _id = item.title;

    function idString(_id) {
      return String(_id).toLowerCase().split(" ").join("");
    }

    const rootId = idString(_id);

    const handleClick = (clickedItem) => {
      navigate(`/Cart/${rootId}`, {
        state: {
          item: clickedItem,
        },
      });
    };

    return (
      <div key={item.id}>
        <Card className="product" style={{ width: "18rem" }}>
          <img
            src={item.image}
            alt={item.title}
            onClick={() => handleClick(item)}
          />

          <Card.Body>
            <Card.Title className="titl">{item.title}</Card.Title>
            <Card.Text className="categ">{item.category}</Card.Text>
            <div className="price">
              <div className="newprice">{item.price}$</div>
              <div className="oldprice">{item.price}$</div>
              <p
                className="add cursor-pointer"
                onClick={() =>
                  dispatch(
                    addtoCart({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      oldprice: item.oldprice,
                      category: item.category,
                      quantity: 1,
                    })
                  ) & toast.success(`${item.title} is added`)
                }
              >
                Add to cart
                <span className="icn">
                  <AiOutlineArrowRight />
                </span>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  });

  const ref = useRef();
  const { scrollXProgress } = useScroll({ container: ref });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const categories = [...new Set(products?.map((product) => product.category))];

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="prod"
      >
        <div expand="lg" className="bg-body-tertiary">
          <Container>
            <Nav className="me-auto">
              <Nav.Link onClick={handleAllProductsClick} className="all">
                All Products
              </Nav.Link>
              {categories.map((category) => (
                <Nav.Link
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </div>
        <motion.div className="product-grid">
          <div className="conta">{productsList}</div>

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
        </motion.div>
      </motion.div>
    </>
  );
};

export default Product;
