import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";
import fuelAPI from "../../api/fuelAPI";

export default function AddFuelPage(props) {
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

    const formData = {
      date_filled: evt.target.elements["date_filled"].value,
      location: evt.target.elements["location"].value,
      price: evt.target.elements["price"].value,
      miles_driven: evt.target.elements["miles_driven"].value,
      gallons_pumped: evt.target.elements["gallons_pumped"].value,
      car: car.id,
    };

    const data = await fuelAPI.createFuel(formData);
    if (data) {
      navigate(`/cars/${car.id}/fuels`);
    }
  };
  return (
    <div>
      <h1>Add Fuel Page</h1>
      <form onSubmit={handleFormSubmit} method="POST">
        <label>Date Fueled: </label>
        <input type="text" name="date_filled" placeholder="yyyy-mm-dd" />
        <br />
        <label>Location: </label>
        <input type="text" name="location" placeholder="Location" />
        <br />
        <label>Price: </label>
        <input type="text" name="price" placeholder="Price" />
        <br />
        <label>Mile Driven: </label>
        <input type="text" name="miles_driven" placeholder="Miles Driven" />
        <br />
        <label>Gallons: </label>
        <input type="text" name="gallons_pumped" placeholder="Gallons" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
