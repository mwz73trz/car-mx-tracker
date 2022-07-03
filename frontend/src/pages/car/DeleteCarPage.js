import { useParams, useNavigate } from "react-router-dom";
import carAPI from "../../api/carAPI";

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
      <p>Are you sure you want to delete this car?</p>
      <br />
      <button type="submit" onClick={deleteCar}>
        Yes
      </button>
      <button type="submit" onClick={cancelDelete}>
        No
      </button>
    </div>
  );
}
