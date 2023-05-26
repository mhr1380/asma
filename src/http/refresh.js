import { http } from "../http";
export const refresh = async (refresh) => {
  return await http.post("auth/refresh/", {
    refresh,
  });
};
