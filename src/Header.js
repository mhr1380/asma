import menu from "./assets/images/menu.png";
import search from "./assets/images/search.png";
import heart from "./assets/images/heart.png";
import home from "./assets/images/home.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext, useAuth } from "./context/AuthProvider";
import userPng from "./assets/images/user.png";
const greetingHandler = (first_name, last_name) => {
  if ((first_name + last_name).length > 12) {
    return first_name;
  } else {
    return `${first_name} ${last_name}`;
  }
};

const Header = ({ text, homee, openMenu }) => {
  const { auth, setAuth } = useAuth();
  // console.log(auth);
  return (
    <div className="kalameh-header">
      <div className="kalameh-header-icons-container">
        <div className="menu-icon-pack">
          {!homee && (
            <Link to="/home">
              <img alt="home-icon" src={home} />
            </Link>
          )}
          <Link to="/likes">
            <img alt="heart-icon" src={heart} />
          </Link>
          <Link to="/search">
            <img alt="search-icon" src={search} />
          </Link>

          {auth.user ? (
            <div className="header-text">
              {greetingHandler(auth.user.first_name, auth.user.last_name)} عزیز
              خوش آمدید!
            </div>
          ) : (
            <Link className="header-text" to="/login">
              ورود
            </Link>
          )}
        </div>

        <div>
          <img
            alt="menu-icon"
            src={menu}
            className="menu-icon"
            onClick={openMenu}
          />
        </div>
      </div>
      <div className="page-text-container">
        <h2 className="page-text">{text}</h2>
      </div>
    </div>
  );
};

export default Header;
