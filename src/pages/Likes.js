import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { getLikes } from "../http/fetch-likes";
import Layout from "../Layout/Layout";

const Likes = () => {
  const [likes, setLikes] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.accessToken) {
      const fetchLikes = async () => {
        const { data } = await getLikes(auth.accessToken);
        setLikes(data.results[0]);
      };
      fetchLikes();
    }
  }, [auth]);
  return (
    <Layout header="علاقه مندی ها">
      <div className="likes-container">
        {likes?.liked_words?.map((like, index) => (
          <Link key={like.id} to={`/words/likes/${like.id}/`}>
            <div className="likes-item">{like.farsi_name} - کلمه</div>
          </Link>
        ))}
        {likes?.liked_affair?.map((like, index) => (
          <Link key={like.id} to={`/affair/likes/${like.id}/`}>
            <div className="likes-item">
              {like.farsi_description.length > 20
                ? like.farsi_description.slice(0, 17) + "..."
                : like.farsi_description}{" "}
              - امور ناشنوایان
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Likes;
