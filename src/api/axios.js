import Axios from "axios";

import Settings from "./Settings";

let APIRequest = Axios.create({
  baseURL: Settings.APIUrl,
  timeout: 10000,
  //   headers: { "Content-Type": "application/json" },
});

export default APIRequest;
