import { http } from "../http";

const Verify = (phone, code) => {
  return http.post("auth/auth/", { phone_number: phone, code });
};

export default Verify;
