import { useParams, useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function DeleteCarPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate("/");
  };

  const deleteCar = async () => {
    const data = carAPI.deleteCar(params.id);
    if (data) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Delete Car Page</h1>
      <Alert variant="danger">Are you sure you want to delete this car?</Alert>
      <Button variant="danger" type="submit" onClick={deleteCar}>
        Yes
      </Button>
      <Button variant="secondary" type="submit" onClick={cancelDelete}>
        No
      </Button>
    </div>
  );
}
