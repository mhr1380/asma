import "./Kalameh.css";
import alpha from "./assets/images/alpha.png";
import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
const Words = () => {
  return (
    <React.Fragment>
      <div className="kalameh">
        <Layout header="کلمه">
          <div className="kalameh-body kalameh-category">
            <div className="kalameh-body-grid">
              <Link to="/words/alphabet">
                <div className="kalameh-alphabet-container">
                  <div className="kalameh-alphabet-inner-container">
                    {" "}
                    <p>الفبا</p>
                    <img
                      alt="alphabet-icon"
                      src={alpha}
                      className="kalameh-category-icon"
                    />
                  </div>
                </div>
              </Link>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                  <img
                    alt="alphabet-icon"
                    src={alpha}
                    className="kalameh-category-icon"
                  />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                  <img
                    alt="alphabet-icon"
                    src={alpha}
                    className="kalameh-category-icon"
                  />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                  <img
                    alt="alphabet-icon"
                    src={alpha}
                    className="kalameh-category-icon"
                  />
                </div>
              </div>
              <div className="kalameh-alphabet-container grid-column-start-2">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                  <img
                    alt="alphabet-icon"
                    src={alpha}
                    className="kalameh-category-icon"
                  />
                </div>
              </div>
              <div className="kalameh-alphabet-container grid-column-start-3">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                  <img
                    alt="alphabet-icon"
                    src={alpha}
                    className="kalameh-category-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default Words;
