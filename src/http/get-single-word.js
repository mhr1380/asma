import { http } from "../http";
export const getWord = async (id, access) => {
  return await http.get(`word-api/words/${id}/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};
