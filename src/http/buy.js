import { http } from "../http";
export const buy = async (access) => {
  return await http.post(
    "kernel-api/bankgateway/",
    {},
    {
      headers: { Authorization: `Bearer ${access}` },
    }
  );
};
