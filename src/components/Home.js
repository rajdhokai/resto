import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

function HomePage() {
  const [name, setName] = useState("");
  const [restaurants, setRestaurant] = useState([]); // change initial state to null
  const navigate = useNavigate();

  async function loadData() {
    let user = localStorage.getItem("user-data");
    setName(JSON.parse(user).name);
    if (!user) {
      navigate("/sign-up");
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    setRestaurant(result.data);
  }

  async function deleterestaurant(id) {
    let result = await axios.delete(`http://localhost:3000/restaurant/${id}`);
    if (result.status === 200) {
      loadData();
    }
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h1>Hello!😀😀 {name}....</h1>
      <div className="container my-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {restaurants &&
              restaurants.map((item, index) => {
                const { id, name, contact, address } = item;
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{contact}</td>
                    <td>{address}</td>
                    <td>
                      <Link
                        to={"/update-rest/" + id}
                        className="mx-2 btn btn-outline-warning"
                      >
                        Update
                      </Link>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          deleterestaurant(id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default HomePage;
