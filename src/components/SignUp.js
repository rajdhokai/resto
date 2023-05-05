import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    try {
      const result = await axios.post("http://localhost:3000/users", {
        name: name,
        email: email,
        password: password,
      });
      if (result.status === 201) {
        localStorage.setItem("user-data", JSON.stringify(result.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  let user = localStorage.getItem("user-data");
  if (user) {
    navigate("/");
  }
  return (
    <div className="container my-5 d-flex justify-content-center">
      <Card style={{ width: "25rem" }}>
        <Card.Header>
          <h3>Sign Up</h3>
        </Card.Header>
        <Card.Img variant="top" src={logo} alt="" />
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Enter name here...."
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                className="form-control"
                placeholder="Enter email here...."
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Enter password here...."
                onChange={handlePasswordChange}
              />
            </Form.Group>{" "}
            <div className="d-grid gap-2">
              <Button variant="dark" onClick={signUp}>
                Sign Up
              </Button>
            </div>{" "}
            <Card.Footer className="my-3">
              <div>
                <p>If you already have an account...</p>
                <NavLink to="/login">Login</NavLink>
              </div>
            </Card.Footer>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
