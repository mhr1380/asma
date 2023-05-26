import { http } from "../http";
export const editMe = async (access, user) => {
  return await http.patch("kernel-api/users/me/", user, {
    headers: { Authorization: `Bearer ${access}` },
  });
};
