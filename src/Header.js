import menu from "./assets/images/menu.png";
import search from "./assets/images/search.png";
import heart from "./assets/images/heart.png";
import home from "./assets/images/home.png";
import { Link } from "react-router-dom";
const Header = ({ text }) => {
  return (
    <div className="kalameh-header">
      <div className="kalameh-header-icons-container">
        <div className="menu-icon-pack">
          <img alt="home-icon" src={home} />
          <Link to="/search">
            <img alt="search-icon" src={search} />
          </Link>
          <img alt="heart-icon" src={heart} />
        </div>
        <div>
          <img alt="menu-icon" src={menu} className="menu-icon" />
        </div>
      </div>
      <div className="page-text-container">
        <h2 className="page-text">{text}</h2>
      </div>
    </div>
  );
};

export default Header;
