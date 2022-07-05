import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import carAPI from "../../api/carAPI";
import fuelAPI from "../../api/fuelAPI";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

export default function FuelsPage(props) {
  const [car, setCar] = useState(null);
  const [fuels, setFuels] = useState([]);
  const params = useParams();

  useEffect(() => {
    loadCar();
  }, [params.id]);

  const loadCar = async () => {
    const data = await carAPI.getCarById(params.id);
    setCar(data);
  };

  useEffect(() => {
    loadFuels();
  }, [car]);

  const loadFuels = async () => {
    if (!car) setFuels([]);

    let newFuels = [];
    for (const fuelId of car.fuels) {
      newFuels.push(await fuelAPI.getFuelById(fuelId));
    }

    setFuels(newFuels);
  };

  const renderFuels = () => {
    return fuels.map((fuel, index) => {
      return (
        <tr key={index}>
          <td>{fuel.date_filled}</td>
          <td>{fuel.location}</td>
          <td>${fuel.price}</td>
          <td>{fuel.miles_driven}M</td>
          <td>{fuel.gallons_pumped}G</td>
          <td>${fuel.total_amount}</td>
          <td>{fuel.mpg} MPG</td>
          <td>
            <Link to={`/fuels/${fuel.id}/update`}>
              <Button>Update</Button>
            </Link>
          </td>
          <td>
            <Link to={`/fuels/${fuel.id}/delete`}>
              <Button variant="danger">Delete Fuel</Button>
            </Link>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1>Fuels Page</h1>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date Fueled</th>
            <th>Location</th>
            <th>Price</th>
            <th>Miles Driven</th>
            <th>Gallons Pumped</th>
            <th>Total Amount</th>
            <th>MPG</th>
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>{renderFuels()}</tbody>
      </Table>
      <br />
      <Link to="add">Add Fuel</Link>
    </div>
  );
}
