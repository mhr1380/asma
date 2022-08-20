import Layout from "./Layout/Layout";
import image1 from "./assets/images/123456.png";
import image2 from "./assets/images/1234567.png";
import nextArrow from "./assets/images/next.png";
import prevArrow from "./assets/images/prev.png";
import { useNavigate, useParams } from "react-router-dom";
import { http } from "./http";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const WordDescription = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState({
    farsi_name: "",
    farsi_description2: "",
    image: "",
    video: "",
    image2: null,
  });
  const params = useParams();
  console.log(params);
  const { wordid } = params;
  useEffect(() => {
    const fetchWord = async () => {
      const {
        data: { results },
      } = await http.get(`/word-api/link-managers/${wordid}/`);
      console.log(results);
      const {
        word: { farsi_name, farsi_description2, image, video },
      } = results[0];
      setWord({
        farsi_name,
        farsi_description2,
        image,
        video,
      });
    };
    fetchWord();
  }, [wordid]);
  return (
    <Layout header="کلمه">
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
            url={word.video}
            controls={true}
          />
          <img src={word.image} alt="image2" />
        </div>
        <div className="description-text-container">
          <p>{word.farsi_name}</p>
          <p>{word.farsi_description2}</p>
        </div>
        {word.image2 && (
          <div className="description-media-container half">
            <img src={image1} alt="image1" />
          </div>
        )}
        <div className="arrow-buttons-container">
          <button
            onClick={() => {
              navigate(`/words/${params.category}/${+wordid + 1}/`);
            }}
            className="arrow-btn"
          >
            <img src={nextArrow} />
          </button>
          <button
            onClick={() => {
              navigate(`/words/${params.category}/${+wordid - 1}/`);
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

export default WordDescription;
