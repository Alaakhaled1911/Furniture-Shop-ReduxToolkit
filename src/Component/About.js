import { useRef } from "react";
import { useSpring } from "framer-motion";
import "./about.css";
import { motion, useScroll } from "framer-motion";
import pi from "../img/OIP.jpg";
const About = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <>
      <div ref={ref} id="about">
        <motion.div style={{ scaleX }} className="progress"></motion.div>
        <div className="about">
          <div className="txt">
            <h1>About Us</h1>

            <p> Learn About Our Passion For Quality Furniture</p>
            <p>
              lorem ipsum dolor sit amet, consect,lorem ipsum dolor sit amet,
              consect lorem ipsum dolor sit amet, consect
            </p>
          </div>
          <div className="imgabout1">
            <img src={pi} className="imgabout2"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
