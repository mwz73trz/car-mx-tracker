import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Cars(props) {
  return (
    <ListGroup style={{ width: "30%", marginLeft: "35%" }}>
      <ListGroup.Item>
        <h3>
          {props.car.year_made} {props.car.make} {props.car.car_model}
        </h3>{" "}
        {"   "}
        <Link to={`cars/${props.car.id}/update`}>
          <Button variant="primary">Update</Button>
        </Link>{" "}
        <Link to={`cars/${props.car.id}/delete`}>
          <Button variant="danger">Delete</Button>
        </Link>
        <br />
        <Link to={`cars/${props.car.id}/fuels`}>Fuel Data</Link>
      </ListGroup.Item>
    </ListGroup>
  );
}
