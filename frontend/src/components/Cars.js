import { Link } from "react-router-dom";

export default function Cars(props) {
  return (
    <div>
      <Link to={`cars/${props.car.id}`}>
        {props.car.year} {props.car.make} {props.car.car_model}
      </Link>
    </div>
  );
}
