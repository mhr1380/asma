import { http } from "../http";
export const unlikeWord = async (word_id, access, t = "word_id") => {
  return await http.post(
    "kernel-api/likes/delete_like/",
    { [t]: word_id },
    {
      headers: { Authorization: `Bearer ${access}` },
    }
  );
};
