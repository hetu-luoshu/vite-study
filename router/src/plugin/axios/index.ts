import Axios from "./instance";

const http = new Axios({
  baseURL: "/api",
  timeout: 10000,
});

export default http;
