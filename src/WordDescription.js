import Layout from "./Layout";
import image1 from "./assets/images/123456.png";
import image2 from "./assets/images/1234567.png";
import nextArrow from "./assets/images/next.png";
import prevArrow from "./assets/images/prev.png";
import { useParams } from "react-router-dom";
import { http } from "./http";
import { useEffect, useState } from "react";
const WordDescription = () => {
  const [word, setWord] = useState({ farsi_name: "", farsi_description2: "" });
  const params = useParams();
  const { wordid } = params;
  useEffect(() => {
    const fetchWord = async () => {
      const { data } = await http.get(`/word-api/words/${wordid}/`);
      setWord({
        farsi_name: data.farsi_name,
        farsi_description2: data.farsi_description2,
      });
    };
    fetchWord();
  }, [wordid]);
  return (
    <Layout header="کلمه">
      <div className="description-body">
        <div className="description-media-container">
          <img src={image2} alt="image2" />
          <img src={image1} alt="image1" />
        </div>
        <div className="description-text-container">
          <p>{word.farsi_name}</p>
          <p>{word.farsi_description2}</p>
        </div>
        <div className="description-media-container half">
          <img src={image1} alt="image1" />
        </div>
        <div className="arrow-buttons-container">
          <button className="arrow-btn">
            <img src={nextArrow} />
          </button>
          <button className="arrow-btn">
            {" "}
            <img src={prevArrow} />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WordDescription;
