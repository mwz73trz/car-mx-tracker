import { useParams, useNavigate } from "react-router-dom";
import fuelAPI from "../../api/fuelAPI";

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
    <div>
      <h1>Delete Fuel Page</h1>
      <p>Are you sure you want to delete this fuel record?</p>
      <br />
      <button type="submit" onClick={deleteFuel}>
        Yes
      </button>
      <button type="submit" onClick={cancelDelete}>
        No
      </button>
    </div>
  );
}
