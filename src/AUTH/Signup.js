

import photo from '../img/c4.jpg';


import { React, useRef, useState } from "react";
import { useAuth } from "../CONTXT/AuthContxt";
import { Form, Button, Card, Alert } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

 function Signup () {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }



  return (
    <>
      <div className="cont">
        <Card>
          <div className="imgg">
            <img src={photo} className="im1" alt="gh" />
          </div>
          <Card.Body>
            <h2 className="text-center mb-4">SIGNUP</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" placeholder="Password" ref={passwordRef} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password confirmation</Form.Label>
                <Form.Control type="password" id="password" placeholder="Password confirmation" ref={passwordConfirmRef} />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
                SIGNUP
              </Button>
            </Form>

            <div className="w-100 text-center mt-3">
              Already have an account? <Link to="/Login">Log In</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Signup;