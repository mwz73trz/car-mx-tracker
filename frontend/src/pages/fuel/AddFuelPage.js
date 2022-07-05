import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";
import fuelAPI from "../../api/fuelAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddFuelPage(props) {
  const [car, setCar] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadCar();
  }, [params.id]);

  const loadCar = async () => {
    const data = await carAPI.getCarById(params.id);
    setCar(data);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const formData = {
      date_filled: evt.target.elements["date_filled"].value,
      location: evt.target.elements["location"].value,
      price: evt.target.elements["price"].value,
      miles_driven: evt.target.elements["miles_driven"].value,
      gallons_pumped: evt.target.elements["gallons_pumped"].value,
      car: car.id,
    };

    const data = await fuelAPI.createFuel(formData);
    if (data) {
      navigate(`/cars/${car.id}/fuels`);
    }
  };
  return (
    <Form
      onSubmit={handleFormSubmit}
      method="POST"
      style={{ width: "30%", marginLeft: "35%" }}
    >
      <h1>Add Fuel Page</h1>
      <Form.Group className="mb-3" controlId="date_filled">
        <Form.Label>Date Fueled</Form.Label>
        <Form.Control type="text" placeholder="yyyy-mm-dd" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="0.00" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="miles_driven">
        <Form.Label>Miles Driven</Form.Label>
        <Form.Control type="text" placeholder="Miles Driven" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="gallons_pumped">
        <Form.Label>Gallons Pumped</Form.Label>
        <Form.Control type="text" placeholder="Gallons Pumped" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
