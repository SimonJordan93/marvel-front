import "../Characters/characters.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-back--6h6hqnm2zbqs.code.run/characters"
        );
        // console.log(response.data);
        setCharacters(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  const charactersInfo = () => {
    return characters.results.map((character, _id) => {
      return (
        <div key={character._id} className="character-card">
          <Link to={`/character/${character._id}`} className="character-img">
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
            />
          </Link>
          <div className="character-info">
            <p className="character-name">{character.name}</p>
            <p className="character-description">{character.description}</p>
          </div>
        </div>
      );
    });
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="characters-main">
      <div className="characters-container">
        <h2>Personnages</h2>
        <div className="characters-section">{charactersInfo()}</div>
      </div>
    </div>
  );
};

export default Characters;
