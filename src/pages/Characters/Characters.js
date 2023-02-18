import "../Characters/characters.css";
import { Link } from "react-router-dom";

const Characters = ({ characters, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="characters-main">
      <div className="characters-container">
        <h2>Personnages</h2>
        <div className="characters-section">
          {characters.results.map((character, _id) => {
            return (
              <Link
                to={`/character/${character._id}`}
                key={character._id}
                className="character-card"
              >
                <div className="character-img">
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt={character.name}
                  />
                </div>
                <div className="character-info">
                  <p className="character-name">{character.name}</p>
                  <p className="character-description">
                    {character.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Characters;
