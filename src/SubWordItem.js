import { Link } from "react-router-dom";
const SubWordItem = ({ title, id }) => {
  return (
    <div className="kalameh-alphabet-container">
      <Link to={`${id}`}>
        <div className="kalameh-alphabet-inner-container">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SubWordItem;
