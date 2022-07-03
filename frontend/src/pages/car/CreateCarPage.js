import { useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";

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
    <div>
      <h1>Create Car Page</h1>
      <form onSubmit={handleFormSubmit} method="POST">
        <label>Make: </label>
        <input type="text" placeholder="Car Make" name="make" />
        <br />
        <label>Model: </label>
        <input type="text" placeholder="Car Model" name="car_model" />
        <br />
        <label>Year: </label>
        <input type="text" placeholder="Year" name="year_made" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
