import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import carAPI from "../../api/carAPI";
import oilAPI from "../../api/oilAPI";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

export default function OilsPage(props) {
  const [car, setCar] = useState(null);
  const [oils, setOils] = useState([]);
  const params = useParams();

  useEffect(() => {
    loadCar();
  }, [params.id]);

  const loadCar = async () => {
    const data = await carAPI.getCarById(params.id);
    setCar(data);
  };

  useEffect(() => {
    loadOils();
  }, [car]);

  const loadOils = async () => {
    if (!car) setOils([]);

    let newOils = [];
    for (const oilId of car.oils) {
      newOils.push(await oilAPI.getOilById(oilId));
    }

    setOils(newOils);
  };

  const renderOils = () => {
    return oils.map((oil, index) => {
      return (
        <tr key={index}>
          <td>{oil.date_changed}</td>
          <td>{oil.location}</td>
          <td>{oil.type_oil}</td>
          <td>{oil.miles_driven} miles</td>
          <td>{oil.oil_due} miles</td>
          <td>
            <Link to={`/oils/${oil.id}/update`}>
              <Button>Update</Button>
            </Link>
          </td>
          <td>
            <Link to={`/oils/${oil.id}/delete`}>
              <Button variant="danger">Delete Oil</Button>
            </Link>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1>Oil Page</h1>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date Oil Changed</th>
            <th>Location</th>
            <th>Type Oil</th>
            <th>Miles Driven</th>
            <th>Next Oil Change Due Date</th>
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>{renderOils()}</tbody>
      </Table>
      <br />
      <Link to="add">Add Oil</Link>
    </div>
  );
}
