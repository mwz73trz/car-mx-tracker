import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const oilAPI = {};

oilAPI.getOils = async () => {
  return await apiHelpers.tryGetFetch(() =>
    axios.get(`${BASE_URL}oils/`, apiHelpers.getCsrfConfig())
  );
};

oilAPI.getOilById = async (oilId) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.get(`${BASE_URL}oils/${oilId}/`, apiHelpers.getCsrfConfig())
  );
};

oilAPI.createOil = async (oilData) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.post(`${BASE_URL}oils/`, oilData, apiHelpers.getCsrfConfig())
  );
};

oilAPI.updateOil = async (oilId, oilData) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.put(`${BASE_URL}oils/${oilId}/`, oilData, apiHelpers.getCsrfConfig())
  );
};

oilAPI.deleteOil = async (oilId) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.delete(`${BASE_URL}oils/${oilId}/`, apiHelpers.getCsrfConfig())
  );
};

export default oilAPI;
