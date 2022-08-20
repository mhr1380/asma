import "../Kalameh.css";
import alpha from "../assets/images/alpha.png";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import WordItem from "../WordItem";
import { http } from "../http";

const Words = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await http.get("/word-api/word-categories/");
      setCategories(data.results);
    };
    fetchCategories();
  }, []);

  return (
    <React.Fragment>
      <div className="kalameh">
        <Layout header="کلمه">
          <div className="kalameh-body kalameh-category">
            <div className={`kalameh-body-grid`}>
              {categories.map((category, index) => (
                <WordItem
                  key={index}
                  title={category.farsi_name}
                  icon={alpha}
                />
              ))}
            </div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default Words;
