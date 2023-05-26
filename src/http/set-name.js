import { http } from "../http";
export const setName = async (first_name, last_name) => {
  return await http.patch("kernel-api/users/me/", { first_name, last_name });
};
