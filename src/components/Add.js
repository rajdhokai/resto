import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function AddRest() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    contact: "",
    address: "",
  });
  const navigate = useNavigate();
  const addRestaurant = async e => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3000/restaurant",
        restaurant
      );
      if (result.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user-data");
    if (!user) {
      navigate("/sign-up");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Restaurant Page!</h1>
      <h3>You Can add new restaurant here....</h3>

      <Form className="add" onSubmit={addRestaurant}>
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
        </Form.Group>
        <Form.Control
          type="text"
          name="contact"
          placeholder="Enter Contact number"
          value={restaurant.contact}
          onChange={e =>
            setRestaurant({ ...restaurant, contact: e.target.value })
          }
        />
        <Form.Group>
          <Form.Label>Address</Form.Label>
        </Form.Group>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter address"
          value={restaurant.address}
          onChange={e =>
            setRestaurant({ ...restaurant, address: e.target.value })
          }
        />
        <Button variant="dark" type="submit">
          Add New Restaurant
        </Button>
      </Form>
    </div>
  );
}

export default AddRest;
