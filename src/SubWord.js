import "./Kalameh.css";
import alpha from "./assets/images/alpha.png";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link, useParams } from "react-router-dom";
import { http } from "./http";

const SubWords = () => {
  const [subWords, setSubWords] = useState([]);
  const params = useParams();
  const { subword } = params;
  useEffect(() => {
    const fetchSubWords = async () => {
      const { data } = await http.get(
        `/word-api/words/?category__farsi_name=${subword}`
      );
    };
    fetchSubWords();
  }, []);

  return (
    <React.Fragment>
      <div className="kalameh">
        <Layout header="کلمه">
          <div className="kalameh-body">
            <div className="kalameh-body-grid subword"></div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default SubWords;
