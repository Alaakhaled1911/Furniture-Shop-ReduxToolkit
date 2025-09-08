import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoGin = () => {
  return (
    <>
      <div className="cont">
        {/* <div className="log"> */}
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">LoGin</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
              <Button variant="primary" type="submit" className="w-100 mt-3">
                SIGNUP
              </Button>
            </Form>
            <div className="w-100 text-center mt-3"></div>
            <div className="w-100 text-center mt-5">
              Need an account ?<Link to="/signup">Signup</Link>
            </div>
          </Card.Body>
          <div className="imgg">
            {/* <img src={photo} className='im1' alt="gh"></img> */}
          </div>
        </Card>
      </div>

      {/* </div> */}
    </>
  );
};

export default LoGin;
