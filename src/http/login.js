import { http } from "../http";
export const Signin = async (phone) => {
  return await http.post("auth/sign-in/", { phone_number: phone });
};
