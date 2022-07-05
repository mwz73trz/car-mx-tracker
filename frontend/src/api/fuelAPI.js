import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const fuelAPI = {};

fuelAPI.getFuelById = async (fuelId) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.get(`${BASE_URL}fuels/${fuelId}/`, apiHelpers.getCsrfConfig())
  );
};

fuelAPI.createFuel = async (fuelData) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.post(`${BASE_URL}fuels/`, fuelData, apiHelpers.getCsrfConfig())
  );
};

fuelAPI.updateFuel = async (fuelId, fuelData) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.put(
      `${BASE_URL}fuels/${fuelId}/`,
      fuelData,
      apiHelpers.getCsrfConfig()
    )
  );
};

fuelAPI.deleteFuel = async (fuelId) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.delete(`${BASE_URL}fuels/${fuelId}/`, apiHelpers.getCsrfConfig())
  );
};

export default fuelAPI;
