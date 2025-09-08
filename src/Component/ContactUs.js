import React, { useState } from 'react';
import { useRef } from 'react';
import { useSpring } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Lottie from "lottie-react";
import Man from '../Animation/Man.json';
import Man2 from '../Animation/Call.json';
import suc from '../Animation/Success.json';
import './contact.css';
import emailjs from 'emailjs-com';
import { motion, useScroll } from 'framer-motion';

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

const ContactUs = () => {
  const ref = useRef();
  const formref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2acibqr', 'template_ialbkpm', formref.current, 'P5Zptm_dXCgoWe43H')
      .then((result) => {
        setSuccess(true);
      
      })
      .catch((error) => {
        setError(true);
      
      });
  };

  return (
    <>
      <div ref={ref} className='con'>
        <div className="txt">
          <motion.h1> Contact Us</motion.h1>
          <p> contact us for more information</p>
        </div>

        <motion.div style={{ scaleX }} className='progress'></motion.div>

        <motion.div className="contact" variants={variants} initial='initial' whileInView='animate'>
          <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}>
            <Lottie
              loop={true}
              style={{ height: 300 }} // Add display: "none" to hide the animation
              animationData={Man}
            />
          </motion.div>
          {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 2 }}>
            <Lottie
              loop={true}
              style={{ height: 300 }}
              animationData={Man2}
            />
          </motion.div> */}

          <motion.div className='FOR'>
            <motion.Form ref={formref} onSubmit={sendEmail}>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Enter your Name" type="text" name='name' />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name='email' />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message here" />
              </Form.Group>

              <Row className="mb-3"></Row>

              <Button variant="primary" type="submit">
                SendMessage
              </Button>
              {error && <p>Error</p>}
{success && (
  
    <p style={{fontSize:'18px',marginTop:'1.7rem',display: 'flex',marginLeft:'1.7rem',alignItems:'center'}}>
    <Lottie 
      loop={false}
      style={{ height: 60 }}
      animationData={suc}
    />
     your message has been sent Successfully
  </p>
)}
      </motion.Form>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;