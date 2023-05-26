import { http } from "../http";
export const getLikes = async (access) => {
  return await http.get("kernel-api/likes/", {
    headers: { Authorization: `Bearer ${access}` },
  });
};
