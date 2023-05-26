import React from "react";
import capital from "./assets/images/capital-letter@2x.png";
import ear from "./assets/images/ear@2x.png";
import puzzle from "./assets/images/puzzle (1)@2x.png";
import test from "./assets/images/test@2x.png";
import { NavLink } from "react-router-dom";
import "./Navmenu.css";
let activeClassName = "active";
const Navmenu = () => {
  return (
    <React.Fragment>
      <div className="nav-menu">
        <div className="nav-item">
          <NavLink
            to="/test"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="nav-item-inner">
              <div className="nav-icon-container">
                {" "}
                <img alt="test-icon" src={test} />
              </div>

              <h3>آزمون</h3>
            </div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/sentence">
            <div className="nav-item-inner">
              <div className="nav-icon-container">
                <img alt="puzzle-icon" src={puzzle} />
              </div>
              <h3>جمله سازی</h3>
            </div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/affair">
            <div className="nav-item-inner">
              <div className="nav-icon-container">
                <img alt="ear-icon" src={ear} />
              </div>
              <h3>امور ناشنوایان</h3>
            </div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/words">
            <div className="nav-item-inner">
              <div className="nav-icon-container">
                <img alt="alphabet-icon" src={capital} />
              </div>
              <h3>کلمه</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navmenu;
