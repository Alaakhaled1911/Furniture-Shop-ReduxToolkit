import useState from "react";
import { useRef } from "react";
import { useSpring } from "framer-motion";
import { motion, useScroll } from "framer-motion";
import Button from "react-bootstrap/Button";

import c4Image from "../img/c11-.png";

import image1 from "../img/c2.jpg"; // Import the individual image files
import image2 from "../img/c3.jpg";
import image3 from "../img/c5.jpg";
import image6 from "../img/c6.png"; // Import the individual image files
import image7 from "../img/c7.png";
import image8 from "../img/c8.jpg";
import image9 from "../img/c9.jpg"; // Import the individual image
import image from "../img/c.jpg";
import image10 from "../img/Sofatable.jpg";
import image11 from "../img/interior-design.jpg";

import "./product.css";

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

const Products = ({ products }) => {
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

  const productsList = filteredProducts?.map((item) => (
    <div className="product" key={item.id}>
      <div>{item.title}</div>

      {item.image === "c2.jpg" && <img src={image1} alt={item.title} />}
      {item.image === "c3.jpg" && <img src={image2} alt={item.title} />}
      {item.image === "c5.jpg" && <img src={image3} alt={item.title} />}
      {item.image === "c11-.png" && <img src={c4Image} alt={item.title} />}
      {item.image === "c6.png" && <img src={image6} alt={item.title} />}
      {item.image === "c7.png" && <img src={image7} alt={item.title} />}
      {item.image === "c8.jpg" && <img src={image8} alt={item.title} />}
      {item.image === "c9.jpg" && <img src={image9} alt={item.title} />}
      {item.image === "c.jpg" && <img src={image} alt={item.title} />}
      {item.image === "Sofatable.jpg" && <img src={image10} alt={item.title} />}
      {item.image === "interior-design.jpg" && (
        <img src={image11} alt={item.title} />
      )}

      <div>{item.price}</div>
      <div>{item.category}</div>
    </div>
  ));

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
      >
        <div className="txt">
          <h6>Top Selling products for you</h6>
          <h1>Top selling products</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip
          </p>
        </div>
        <div className="category-buttons">
          <Button onClick={handleAllProductsClick}>All Products</Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div className="product-grid">
          <div className="conta">{productsList}</div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Products;
