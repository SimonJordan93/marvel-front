import "../Character/character.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Character = () => {
  const [character, setCharacter] = useState();
  const [comicFeatures, setComicFeatures] = useState();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--6h6hqnm2zbqs.code.run/character/${id}`
        );

        setCharacter(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchComics = async () => {
      try {
        const res = await axios.get(
          `https://site--marvel-back--6h6hqnm2zbqs.code.run/comics/${id}`
        );
        setComicFeatures(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacter();
    fetchComics();
  }, [id]);

  // const features = () => {
  //   return;
  // };

  return !character || !comicFeatures ? (
    <p>Loading...</p>
  ) : (
    <div className="charac-main">
      <div key={character._id} className="charac-card">
        <div className="charac-img">
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={character.name}
          />
        </div>
        <div className="charac-info">
          <p className="charac-name">{character.name}</p>
          <p className="charac-description">{character.description}</p>
        </div>
      </div>

      <div className="comic-features-gallery">
        {comicFeatures.comics.map((comic, _id) => {
          return (
            <div key={comic._id} className="comic-features-card">
              <div className="comic-features-img">
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                />
              </div>
              <div className="comic-features-info">
                <h3 className="comic-features-title">{comic.title}</h3>
                <div className="comic-features-description">
                  <p>{comic.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
