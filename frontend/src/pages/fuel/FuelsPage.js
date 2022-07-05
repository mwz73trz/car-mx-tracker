import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useParams, Link } from "react-router-dom";
import carAPI from "../../api/carAPI";
import fuelAPI from "../../api/fuelAPI";

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
        <li key={index}>
          {fuel.date_filled} ${fuel.total_amount} {fuel.mpg}
          {"  "}
          <Link to={`/fuels/${fuel.id}/update`}>
            <Button>Update</Button>
          </Link>
          {"   "}
          <Link to={`/fuels/${fuel.id}/delete`}>
            <Button>Delete Fuel</Button>
          </Link>
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Fuels Page</h1>
      <br />
      {renderFuels()}
      <br />
      <Link to="add">Add Fuel</Link>
    </div>
  );
}
