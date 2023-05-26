import Layout from "../Layout/Layout";
import music from "../assets/images/music.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Popup from "../components/popup";
import { useState, useEffect } from "react";
import { http } from "../http";

const AffairCategory = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [words, setWords] = useState([]);
  const { auth } = useAuth();
  const params = useParams();
  const { category } = params;
  const navigator = useNavigate();
  useEffect(() => {
    const fetchSubCategories = async () => {
      if (auth.accessToken) {
        try {
          const { data } = await http.get(
            `/affair-api/affair-categories/?parent__farsi_name=${category}`,
            { headers: { Authorization: `Bearer ${auth.accessToken}` } }
          );
          if (data.count === 0) {
            const { data: resp } = await http.get(
              `/affair-api/affairs/?category__farsi_name=${category}`,
              { headers: { Authorization: `Bearer ${auth.accessToken}` } }
            );
            setWords(resp.results);
            setSubCategories(data.results);
          } else {
            setSubCategories(data.results);
          }
        } catch (error) {
          navigator("/login");
        }
      }
    };
    fetchSubCategories();
  }, [category, auth]);
  return (
    <Layout header="امور ناشنوایان">
      <div className="deaf-body">
        <div className="deaf-list-container">
          {subCategories.map((subCategory) => {
            return (
              <Link to={`/affair/${subCategory.farsi_name}`}>
                <div className="deaf-list-item-container">
                  <div className="deaf-list-item">
                    <h3>{subCategory.farsi_name}</h3>
                    <img src={music} alt="music-icon" />
                  </div>
                </div>
              </Link>
            );
          })}
          {words.map((word) => {
            return (
              <Link to={`/affair/${word.farsi_description}/${word.id}`}>
                <div className="deaf-list-item-container">
                  <div className="deaf-list-item">
                    <h3>
                      {word.farsi_description.length > 10
                        ? word.farsi_description.slice(0, 20) + "..."
                        : word.farsi_description}
                    </h3>
                    <img src={music} alt="music-icon" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AffairCategory;
