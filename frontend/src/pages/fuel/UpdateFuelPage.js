import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fuelAPI from "../../api/fuelAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UpdateFuelPage(props) {
  const [fuel, setFuel] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadFuel();
  }, [params.id]);

  const loadFuel = async () => {
    const data = await fuelAPI.getFuelById(params.id);
    setFuel(data);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const fuelData = {
      date_filled: evt.target.elements["date_filled"].value,
      location: evt.target.elements["location"].value,
      price: evt.target.elements["price"].value,
      miles_driven: evt.target.elements["miles_driven"].value,
      gallons_pumped: evt.target.elements["gallons_pumped"].value,
      car: fuel.car,
    };

    const updatedData = await fuelAPI.updateFuel(params.id, fuelData);
    setFuel(updatedData);
    navigate(-1);
  };

  const renderFuel = () => {
    if (!fuel) {
      return null;
    }

    return (
      <Form
        onSubmit={handleFormSubmit}
        method="PUT"
        style={{ width: "30%", marginLeft: "35%" }}
      >
        <Form.Group className="mb-3" controlId="date_filled">
          <Form.Label>Date Fueled</Form.Label>
          <Form.Control type="text" defaultValue={fuel.date_filled} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" defaultValue={fuel.location} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" defaultValue={fuel.price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="miles_driven">
          <Form.Label>Miles Driven</Form.Label>
          <Form.Control type="text" defaultValue={fuel.miles_driven} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="gallons_pumped">
          <Form.Label>Gallons Pumped</Form.Label>
          <Form.Control type="text" defaultValue={fuel.gallons_pumped} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  };
  return (
    <div>
      <h1>Update Fuel Page</h1>
      <br />
      {renderFuel()}
    </div>
  );
}
