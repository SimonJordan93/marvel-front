import { Link } from "react-router-dom";
import "../Footer/footer.css";

const Footer = ({ handlePageChange }) => {
  return (
    <div className="marvel-footer">
      <div className="marvel-footer-menu">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          Home
        </Link>
        <Link to="/characters" onClick={() => window.scrollTo(0, 0)}>
          Personnages
        </Link>
        <Link to="/comics" onClick={() => window.scrollTo(0, 0)}>
          Comics
        </Link>
        <Link to="/favorites" onClick={() => window.scrollTo(0, 0)}>
          Favoris
        </Link>
      </div>
      <div className="marvel-footer-made-by">
        Made by Simon JORDAN - Le Reacteur - 2023
      </div>
    </div>
  );
};

export default Footer;
