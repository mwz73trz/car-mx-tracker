import { useParams, useNavigate } from "react-router-dom";
import oilAPI from "../../api/oilAPI";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function DeleteOilPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate(-1);
  };

  const deleteOil = async () => {
    const data = await oilAPI.deleteOil(params.id);
    if (data) {
      navigate(-1);
    }
  };
  return (
    <div>
      <h1>Delete Oil Page</h1>
      <Alert variant="danger">
        Are you sure you want to delete this oil record?
      </Alert>
      <br />
      <Button variant="danger" type="submit" onClick={deleteOil}>
        Yes
      </Button>
      <Button variant="secondary" type="submit" onClick={cancelDelete}>
        No
      </Button>
    </div>
  );
}
