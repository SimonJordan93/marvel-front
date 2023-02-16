import { Link } from "react-router-dom";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="marvel-footer">
      <div className="marvel-footer-menu">
        <Link to="/">Home</Link>
        <Link to="/characters">Personnages</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/favorites">Favoris</Link>
      </div>
      <div className="marvel-footer-made-by">
        Made by Simon JORDAN - Le Reacteur - 2023
      </div>
    </div>
  );
};

export default Footer;
