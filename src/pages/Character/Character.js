import "../Character/character.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import Card from "../../components/Card/Card";

const Character = ({ handleComicsLike, handleCharacterLike }) => {
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
        // console.log(res.data);
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
      <div className="item-card">
        <Card cardData={character} handleLike={handleCharacterLike} />
      </div>

      <div className="comic-features-gallery">
        {comicFeatures.comics.map((comic, _id) => {
          return (
            <div key={comic._id} className="item-card">
              <Card cardData={comic} handleLike={handleComicsLike} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
