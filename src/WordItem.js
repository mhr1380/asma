import { Link } from "react-router-dom";
const WordItem = ({ title, icon, alphabet, url = "words" }) => {
  if (alphabet) {
    return (
      <div className="kalameh-alphabet-container">
        <div className="kalameh-alphabet-inner-container">
          <Link to={`/${url}/${title}`}>
            <img alt="alphabet-icon" src={alphabet} />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <Link to={`/${url}/${title}`}>
      <div className="kalameh-alphabet-container">
        <div className="kalameh-alphabet-inner-container">
          {" "}
          <p>{title}</p>
          <img alt={title} src={icon} className="kalameh-category-icon" />
        </div>
      </div>
    </Link>
  );
};

export default WordItem;
