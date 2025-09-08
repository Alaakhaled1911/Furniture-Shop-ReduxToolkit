import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
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
const TopSell = () => {
  const ref = useRef();

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
      </motion.div>
    </>
  );
};

export default TopSell;
