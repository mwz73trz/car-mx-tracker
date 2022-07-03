import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const carAPI = {};

carAPI.getCars = async () => {
  return await apiHelpers.tryGetFetch(() => axios.get(`${BASE_URL}cars/`));
};

carAPI.getCarById = async (carId) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.get(`${BASE_URL}cars/${carId}/`)
  );
};

carAPI.createCar = async (carData) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.post(`${BASE_URL}cars/`, carData)
  );
};

carAPI.updateCar = async (carId, carData) => {
  return apiHelpers.tryGetFetch(() =>
    axios.put(`${BASE_URL}cars/${carId}/`, carData)
  );
};

carAPI.deleteCar = async (carId) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.delete(`${BASE_URL}cars/${carId}`)
  );
};

export default carAPI;
