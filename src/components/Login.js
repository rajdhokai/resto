import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
import { Button, Card, Form } from "react-bootstrap";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-data", JSON.stringify(result.data[0]));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <Card style={{ width: "25rem" }}>
        <Card.Header>
          <h3>Login</h3>
        </Card.Header>
        <Card.Img variant="top" src={logo} alt="" />
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group className="my-3">
                <Form.Control
                  type="text"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Enter your email here...."
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  placeholder="Enter password here...."
                />
              </Form.Group>{" "}
              <div className="d-grid gap-2">
                <Button onClick={login}>Login</Button>
              </div>
              <Card.Footer className="my-3">
                <p>If You Don't have an account, do sign up</p>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </Card.Footer>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
