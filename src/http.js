import axios from "axios";

axios.defaults.baseURL = "http://localhost:8585";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
