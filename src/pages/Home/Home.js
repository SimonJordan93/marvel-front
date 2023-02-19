// Home.js
import "../Home/home.css";

import { Link } from "react-router-dom";

const Home = ({ characters, comics, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="home-main">
      {characters && (
        <div className="carousel">
          <h2>Personnages</h2>
          <div className="carousel-inner">
            {characters.results.map((character, _id) => {
              return (
                <Link
                  to={`/character/${character._id}`}
                  key={character._id}
                  className="carousel-item"
                >
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt={character.name}
                  />
                </Link>
              );
            })}
          </div>
          <Link
            to="/characters"
            className="see-more"
            onClick={() => window.scrollTo(0, 0)}
          >
            Voir plus
          </Link>
        </div>
      )}
      {comics && (
        <div className="carousel">
          <h2>Comics</h2>
          <div className="carousel-inner">
            {comics.results.map((comic, _id) => {
              return (
                <div key={comic._id} className="carousel-item">
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt={comic.title}
                  />
                </div>
              );
            })}
          </div>
          <Link
            to="/comics"
            className="see-more"
            onClick={() => window.scrollTo(0, 0)}
          >
            Voir plus
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
