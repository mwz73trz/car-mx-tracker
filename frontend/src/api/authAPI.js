import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const authAPI = {};

authAPI.login = async (loginData) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

authAPI.logout = async () => {
  return await apiHelpers.tryGetFetch(() =>
    axios.post(`${BASE_URL}logout/`, apiHelpers.getCsrfConfig())
  );
};

authAPI.signup = async (signupData) => {
  return await apiHelpers.tryGetFetch(() =>
    axios.post(`${BASE_URL}signup/`, signupData, apiHelpers.getCsrfConfig())
  );
};

export default authAPI;
