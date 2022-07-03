import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";

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
      <form onSubmit={handleFormSubmit} method="PUT">
        <label>Make: </label>
        <input name="make" defaultValue={car.make} />
        <br />
        <label>Model: </label>
        <input name="car_model" defaultValue={car.car_model} />
        <br />
        <label>Year: </label>
        <input name="year_made" defaultValue={car.year_made} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };
  return (
    <div>
      <h1>Update Car Page</h1>
      {renderContact()}
    </div>
  );
}
