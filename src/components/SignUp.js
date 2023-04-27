import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
      console.log(result);
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
    <div className="register">
      <img className="logo" src={logo} alt="" />
      <div className="mb-3">
        <h1>Sign Up</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name here...."
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email here...."
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password here...."
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-dark" type="submit" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
