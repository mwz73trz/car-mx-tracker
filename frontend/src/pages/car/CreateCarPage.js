import { useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateCarPage(props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const carData = {
      make: evt.target.elements["make"].value,
      car_model: evt.target.elements["car_model"].value,
      year_made: evt.target.elements["year_made"].value,
      fuels: [],
    };

    const data = await carAPI.createCar(carData);
    if (data) {
      navigate("/");
    }
  };
  return (
    <Form
      onSubmit={handleFormSubmit}
      method="POST"
      style={{ width: "30%", marginLeft: "35%" }}
    >
      <h1>Create Car Page</h1>
      <Form.Group className="mb-3" controlId="make">
        <Form.Label>Car Make</Form.Label>
        <Form.Control type="text" placeholder="Make" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="car_model">
        <Form.Label>Car Model</Form.Label>
        <Form.Control type="text" placeholder="Car Model" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="year_made">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" placeholder="Year" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
