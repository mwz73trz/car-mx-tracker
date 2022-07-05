import { useParams, useNavigate } from "react-router-dom";
import fuelAPI from "../../api/fuelAPI";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function DeleteFuelPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate(-1);
  };

  const deleteFuel = async () => {
    const data = await fuelAPI.deleteFuel(params.id);
    if (data) {
      navigate(-1);
    }
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <h1>Delete Fuel Page</h1>
      <Alert variant="danger">
        Are you sure you want to delete this fuel record?
      </Alert>
      <br />
      <Button variant="danger" type="submit" onClick={deleteFuel}>
        Yes
      </Button>
      <Button variant="secondary" type="submit" onClick={cancelDelete}>
        No
      </Button>
    </div>
  );
}
