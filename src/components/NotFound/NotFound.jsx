import style from "./NotFound.module.css";
import { Link } from "react-router-dom";
import img404 from "../../assets/img404.png";

const NotFound = () => {
  return (
    <div className={style.NotFound}>
      <img src={img404} alt="Not Found" />
      <div className={style.NotFound_text}>
        <h2> Page Not Found</h2>
        <p>
          {" "}
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.{" "}
        </p>
        <Link to="/main" className={style.NotFound_link}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
