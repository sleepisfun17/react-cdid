import Axios from "../axios";

const userLogin = (data) => {
  return Axios.post("api/login/login", data);
};

const validateToken = (data) => {
  return Axios.post("api/login/tokenidentity", data);
};

const validateGoogle = (data) => {
  return Axios.post("api/login/GoogleLogin", data);
};

export { userLogin, validateToken, validateGoogle };
