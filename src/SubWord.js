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
          <div className="kalameh-body">
            <div className="kalameh-body-grid subword">
              <div className="kalameh-alphabet-container">
                <Link to="/words/alphabet/subword/description">
                  <div className="kalameh-alphabet-inner-container">
                    <p>الفبا</p>
                  </div>
                </Link>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <p>الفبا</p>
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
