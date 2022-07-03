import { useEffect, useState } from "react";
import Cars from "../components/Cars";
import carAPI from "../api/carAPI";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function HomePage(props) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    const data = await carAPI.getCars();
    setCars(data ? data : []);
  };

  const renderCars = () => {
    return cars.map((car, index) => {
      return <Cars key={index} car={car} />;
    });
  };
  return (
    <div>
      <h1>Home Page</h1>
      {renderCars()}
      <br />
      <Link to="/cars/create">
        <Button>Add New Car</Button>
      </Link>
    </div>
  );
}
