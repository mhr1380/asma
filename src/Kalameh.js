import "./Kalameh.css";
import alphabet from "./assets/images/alphabet.png";
import React from "react";
import Navmenu from "./Navmenu";
import Layout from "./Layout";
const Kalameh = () => {
  return (
    <React.Fragment>
      <div className="kalameh">
        <Layout>
          <div className="kalameh-body">
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
            <div className="kalameh-alphabet-container">
              <div className="kalameh-alphabet-inner-container">
                <img alt="alphabet-icon" src={alphabet} />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default Kalameh;
