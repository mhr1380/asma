import "./Kalameh.css";
import alphabet from "./assets/images/alphabet.png";
import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import WordItem from "./WordItem";
import { http } from "./http";
import SubWordItem from "./SubWordItem";
const Alphabet = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [words, setWords] = useState([]);
  const params = useParams();
  const { category } = params;
  const navigator = useNavigate();
  useEffect(() => {
    const fetchSubCategories = async () => {
      const { data } = await http.get(
        `/word-api/word-categories/?parent__farsi_name=${category}`
      );
      if (data.count === 0) {
        const { data: resp } = await http.get(
          `/word-api/words/?category__farsi_name=${category}`
        );
        setWords(resp.results);
        setSubCategories(data.results);
      } else {
        setSubCategories(data.results);
      }
    };
    fetchSubCategories();
  }, [category]);

  return (
    <React.Fragment>
      <div className="kalameh">
        <Layout header="کلمه">
          <div className="kalameh-body">
            <div
              className={`kalameh-body-grid ${
                words.length > 0 ? "subword" : ""
              }`}
            >
              {category === "الفبا"
                ? subCategories.map((subCategory, index) => (
                    <WordItem
                      key={index}
                      title={subCategory.farsi_name}
                      alphabet={alphabet}
                    />
                  ))
                : subCategories.map((subCategory, index) => (
                    <WordItem
                      key={index}
                      title={subCategory.farsi_name}
                      icon={alphabet}
                    />
                  ))}
              {words.length > 0 &&
                words.map((word) => {
                  return (
                    <SubWordItem
                      key={word.id}
                      id={word.id}
                      title={word.farsi_name}
                    />
                  );
                })}
            </div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default Alphabet;
