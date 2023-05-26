import { http } from "../http";
export const likeWord = async (word_id, access, t = "word_id") => {
  return await http.post(
    "kernel-api/likes/add_like/",
    { [t]: word_id },
    {
      headers: { Authorization: `Bearer ${access}` },
    }
  );
};
