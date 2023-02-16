// Home.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Home/home.css";

const Home = () => {
  const [characters, setCharacters] = useState();
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-back--6h6hqnm2zbqs.code.run/characters?name=x"
        );
        setCharacters(response.data);
        // console.log(characters);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchComics = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-back--6h6hqnm2zbqs.code.run/comics?title=x"
        );
        setComics(response.data);
        // console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
    fetchComics();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="home-main">
      {characters && (
        <div className="carousel">
          <h2>Characters</h2>
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
          <Link to="/characters" className="see-more">
            See more
          </Link>
        </div>
      )}
      {comics && (
        <div className="carousel">
          <h2>Comics</h2>
          <div className="carousel-inner">
            {comics.results.map((comic, _id) => {
              return (
                <Link
                  to={`/comics/${comic._id}`}
                  key={comic._id}
                  className="carousel-item"
                >
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt={comic.title}
                  />
                </Link>
              );
            })}
          </div>
          <Link to="/comics" className="see-more">
            See more
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
