import axios from "axios";

axios.defaults.baseURL = "https://api.eshareh-app.ir";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2Nzk1MTE5LCJqdGkiOiI1YmEyYjRhZDhlN2Q0ODBiYWE4OWI3MWZhYjRiN2YwNCIsInVzZXJfaWQiOjF9.W9N8hNlU7rE8p-7AJieuCSIzCuuCSUqVMPt88x9H0EY";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
