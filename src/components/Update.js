import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function UpdateRest() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    contact: "",
    address: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  async function fetchData() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      navigate("/login");
    }
    let result = await axios.get(`http://localhost:3000/restaurant/${id}`);
    setRestaurant(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function updateRestaurant() {
    const result = await axios.put(`http://localhost:3000/restaurant/${id}`, {
      name: restaurant.name,
      contact: restaurant.contact,
      address: restaurant.address,
    });
    if (result.status === 200) {
      navigate("/");
    }
  }

  return (
    <>
      <h1>Welcome to the Restaurant Page!</h1>
      <h3>You Can update new restaurant here....</h3>
      <Form className="add">
        <Form.Group>
          <Form.Label>Restaurant Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Restaurant name"
            value={restaurant.name}
            onChange={e =>
              setRestaurant({ ...restaurant, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contact"
            placeholder="Enter Contact number"
            value={restaurant.contact}
            onChange={e =>
              setRestaurant({ ...restaurant, contact: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter address"
            value={restaurant.address}
            onChange={e =>
              setRestaurant({ ...restaurant, address: e.target.value })
            }
          />
        </Form.Group>
        <Button
          variant="dark"
          onClick={() => {
            updateRestaurant();
          }}
        >
          Update Restaurant
        </Button>
      </Form>
    </>
  );
}

export default UpdateRest;
