import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fuelAPI from "../../api/fuelAPI";

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
      <div>
        <form onSubmit={handleFormSubmit} method="PUT">
          <label>Date Fueled: </label>
          <input
            type="text"
            name="date_filled"
            defaultValue={fuel.date_filled}
          />
          <br />
          <label>Location: </label>
          <input type="text" name="location" defaultValue={fuel.location} />
          <br />
          <label>Price: </label>
          <input type="text" name="price" defaultValue={fuel.price} />
          <br />
          <label>Miles Driven: </label>
          <input
            type="text"
            name="miles_driven"
            defaultValue={fuel.miles_driven}
          />
          <br />
          <label>Gallons: </label>
          <input
            type="text"
            name="gallons_pumped"
            defaultValue={fuel.gallons_pumped}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
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
