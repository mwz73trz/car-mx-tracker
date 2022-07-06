import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import oilAPI from "../../api/oilAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UpdateOilPage(props) {
  const [oil, setOil] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadOil();
  }, [params.id]);

  const loadOil = async () => {
    const data = await oilAPI.getOilById(params.id);
    setOil(data);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const oilData = {
      date_changed: evt.target.elements["date_changed"].value,
      location: evt.target.elements["location"].value,
      type_oil: evt.target.elements["type_oil"].value,
      miles_driven: evt.target.elements["miles_driven"].value,
      car: oil.car,
    };

    const updatedData = await oilAPI.updateOil(params.id, oilData);
    setOil(updatedData);
    navigate(-1);
  };

  const renderOil = () => {
    if (!oil) {
      return null;
    }

    return (
      <Form
        onSubmit={handleFormSubmit}
        method="PUT"
        style={{ width: "30%", marginLeft: "35%" }}
      >
        <Form.Group className="mb-3" controlId="date_changed">
          <Form.Label>Date of Oil Change</Form.Label>
          <Form.Control type="text" defaultValue={oil.date_changed} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" defaultValue={oil.location} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="type_oil">
          <Form.Label>Oil Type</Form.Label>
          <Form.Control type="text" defaultValue={oil.type_oil} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="miles_driven">
          <Form.Label>Miles Driven</Form.Label>
          <Form.Control type="text" defaultValue={oil.miles_driven} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  };
  return (
    <div>
      <h1>Update Oil Page</h1>
      {renderOil()}
    </div>
  );
}
