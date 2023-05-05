import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className="header"
      style={{ backgroundColor: "#333", overflow: "hidden" }}
    >
      <Link
        to="/"
        style={{
          float: "left",
          color: "#f2f2f2",
          padding: "14px 16px",
          textAlign: "center",
          fontSize: "17px",
          textDecoration: "none",
          marginRight: "5px",
        }}
      >
        Home
      </Link>
      <Link
        to="/add-rest"
        style={{
          float: "left",
          color: "#f2f2f2",
          padding: "14px 16px",
          textAlign: "center",
          fontSize: "17px",
          textDecoration: "none",
          marginRight: "5px",
        }}
      >
        Add Restaurant
      </Link>
      <a
        onClick={logout}
        href="#"
        style={{
          float: "left",
          color: "#f2f2f2",
          padding: "14px 16px",
          textAlign: "center",
          fontSize: "17px",
          textDecoration: "none",
          marginRight: "5px",
        }}
      >
        Logout
      </a>
    </div>
  );
}

export default Header;
