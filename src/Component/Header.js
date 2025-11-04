import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { addtoCart } from '../store/ProductSlice';
import { BiCart } from "react-icons/bi";
import "./header.css";
import { PiUserSwitchFill } from "react-icons/pi";

const Header = () => {
  const { productData } = useSelector((state) => state.products);
  const { userInfo } = useSelector((state) => state.products);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">
            <Navbar.Brand className="fur">FURNITURE</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Nav.Link href="#about">AboutUs</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>

              <Link to="/shipping">
                <div style={{ position: "relative" }}>
                  <BiCart
                    style={{
                      height: "36px",
                      width: "37px",
                      color: "#66153b",
                    }}
                  />

                  <span className="cartlength"> {productData.length}</span>
                </div>
              </Link>

              {userInfo ? (
                <Link
                  to="/login"
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignitems: "center",
                    marginLeft: "-14px",
                  }}
                >
                  <img
                    src={userInfo.image}
                    alt="User Avatar"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "27px",
                      marginTop: "7px",
                    }}
                  />
                  <p
                    style={{
                      marginLeft: "22px",
                      color: "rgb(86, 21, 59)",
                      marginTop: "7px",
                    }}
                  >
                    {userInfo.name}
                  </p>
                </Link>
              ) : (
                <Link to="/login">
                  <PiUserSwitchFill
                    style={{
                      height: "30px",
                      width: "30px",
                      marginTop: "4px",
                      marginLeft: "-2px",
                    }}
                  />
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
