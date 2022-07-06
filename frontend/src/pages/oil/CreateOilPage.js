import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import carAPI from "../../api/carAPI";
import oilAPI from "../../api/oilAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateOilPage(props) {
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

    const oilData = {
      date_changed: evt.target.elements["date_changed"].value,
      location: evt.target.elements["location"].value,
      type_oil: evt.target.elements["type_oil"].value,
      miles_driven: evt.target.elements["miles_driven"].value,
      car: car.id,
    };

    const data = await oilAPI.createOil(oilData);
    if (data) {
      navigate(`/cars/${car.id}/oils`);
    }
  };
  return (
    <Form
      onSubmit={handleFormSubmit}
      method="POST"
      style={{ width: "30%", marginLeft: "35%" }}
    >
      <h1>Add Oil Page</h1>
      <Form.Group className="mb-3" controlId="date_changed">
        <Form.Label>Date of Oil Change</Form.Label>
        <Form.Control type="text" placeholder="yyyy-mm-dd" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="type_oil">
        <Form.Label>Oil Type</Form.Label>
        <Form.Control type="text" placeholder="oil type" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="miles_driven">
        <Form.Label>Miles Driven</Form.Label>
        <Form.Control type="text" placeholder="Miles Driven" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
