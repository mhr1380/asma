import { http } from "../http";
export const getMe = async (access) => {
  return await http.get("kernel-api/users/me/", {
    headers: { Authorization: `Bearer ${access}` },
  });
};
