import Layout from "../Layout/Layout";
import image1 from "../assets/images/123456.png";
import image2 from "../assets/images/1234567.png";
import nextArrow from "../assets/images/next.png";
import prevArrow from "../assets/images/prev.png";
import { useNavigate, useParams } from "react-router-dom";
import { http } from "../http";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import like_heart from "../assets/images/like-heart.png";
import like_heart_solid from "../assets/images/like-heart-solid.png";
import { likeWord } from "../http/like";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { unlikeWord } from "../http/unlike";
const AffairDescription = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [word, setWord] = useState({
    farsi_description: "",
    video_link: [],
    image2: null,
  });
  const params = useParams();
  const { wordid } = params;
  useEffect(() => {
    const fetchWord = async () => {
      try {
        if (auth.accessToken) {
          const { data } = await http.get(`/affair-api/affairs/${wordid}/`, {
            headers: { Authorization: `Bearer ${auth.accessToken}` },
          });
          const { farsi_description, video_link, like } = data;
          setWord({
            farsi_description,

            video_link,
            like,
          });
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      }
    };
    fetchWord();
  }, [wordid, auth]);
  return (
    <Layout header="امور ناشنوایان">
      <div className="description-body">
        <div className="description-media-container">
          <ReactPlayer // Disable download button
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload noplaybackrate nofullscreen",
                },
              },
            }}
            // Disable right click
            onContextMenu={(e) => e.preventDefault()}
            width={"100%"}
            url={word?.video_link[0]?.link}
            controls={true}
          />
        </div>
        <div className="description-text-container">
          <p>{word.farsi_description}</p>
        </div>

        <div className="arrow-buttons-container">
          <button
            onClick={() => {
              navigate(`/affair/${params.category}/${+wordid + 1}/`);
            }}
            className="arrow-btn"
          >
            <img src={nextArrow} />
          </button>
          <button
            className="description-like-container"
            onClick={async () => {
              if (auth.accessToken) {
                try {
                  if (word.like) {
                    await unlikeWord(wordid, auth.accessToken, "affair_id");
                    setWord({ ...word, like: false });
                    toast.success("با موفقیت از لیست علاقه مندی ها حذف شد.");
                  } else {
                    await likeWord(wordid, auth.accessToken, "affair_id");
                    setWord({ ...word, like: true });
                    toast.success("با موفقیت به علاقه مندی ها اضافه شد.");
                  }
                } catch (error) {
                  toast.error(
                    "مشکلی در اتصال پیش آمده است.لطفا بعدا امتحان کنید"
                  );
                }
              } else {
                toast.warning("برای افزودن به علاقه مندی ها باید وارد شوید");
                navigate("/login");
              }
            }}
          >
            <img src={word?.like ? like_heart_solid : like_heart} />
          </button>
          <button
            onClick={() => {
              navigate(`/affair/${params.category}/${+wordid - 1}/`);
            }}
            className="arrow-btn"
          >
            {" "}
            <img src={prevArrow} />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AffairDescription;
