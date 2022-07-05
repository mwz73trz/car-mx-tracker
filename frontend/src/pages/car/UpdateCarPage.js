import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UpdateCarPage(props) {
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

    const carData = {
      make: evt.target.elements["make"].value,
      car_model: evt.target.elements["car_model"].value,
      year_made: evt.target.elements["year_made"].value,
      fuels: [],
    };

    const data = await carAPI.updateCar(params.id, carData);
    setCar(data);
    navigate(-1);
  };

  const renderContact = () => {
    if (!car) {
      return null;
    }

    return (
      <Form
        onSubmit={handleFormSubmit}
        method="PUT"
        style={{ width: "30%", marginLeft: "35%" }}
      >
        <h1>Update Car Page</h1>
        <Form.Group className="mb-3" controlId="make">
          <Form.Label>Car Make</Form.Label>
          <Form.Control type="text" defaultValue={car.make} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="car_model">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" defaultValue={car.car_model} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="year_made">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" defaultValue={car.year_made} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  };
  return <div>{renderContact()}</div>;
}
