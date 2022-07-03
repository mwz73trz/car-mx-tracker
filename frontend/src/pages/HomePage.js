import { useEffect, useState } from "react";
import Cars from "../components/Cars";
import carAPI from "../api/carAPI";

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
    </div>
  );
}
