import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Cars(props) {
  return (
    <div>
      <Link to={`cars/${props.car.id}/fuels`}>
        {props.car.year_made} {props.car.make} {props.car.car_model}
      </Link>{" "}
      {"   "}
      <Link to={`cars/${props.car.id}/update`}>
        <Button variant="primary">Update</Button>
      </Link>{" "}
      <Link to={`cars/${props.car.id}/delete`}>
        <Button>Delete</Button>
      </Link>
      <br />
      <Link to={`cars/${props.car.id}/fuels`}>Fuel Data</Link>
    </div>
  );
}
