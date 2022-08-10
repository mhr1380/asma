import "./Kalameh.css";
import alphabet from "./assets/images/alphabet.png";
import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
const Alphabet = () => {
  return (
    <React.Fragment>
      <div className="kalameh">
        <Layout header="کلمه">
          <div className="kalameh-body">
            <div className="kalameh-body-grid">
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <Link to="/words/alphabet/subword">
                    <img alt="alphabet-icon" src={alphabet} />
                  </Link>
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <img alt="alphabet-icon" src={alphabet} />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <img alt="alphabet-icon" src={alphabet} />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <img alt="alphabet-icon" src={alphabet} />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <img alt="alphabet-icon" src={alphabet} />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <img alt="alphabet-icon" src={alphabet} />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <img alt="alphabet-icon" src={alphabet} />
                </div>
              </div>
              <div className="kalameh-alphabet-container">
                <div className="kalameh-alphabet-inner-container">
                  <img alt="alphabet-icon" src={alphabet} />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default Alphabet;
