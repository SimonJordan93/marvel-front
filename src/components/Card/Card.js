import "../Card/card.css";
import Deadpool from "../../assets/img/deadpool-love.png";

const Card = ({ cardData, handleLike }) => {
  return (
    <>
      <div className="card-img">
        <img
          src={
            cardData.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? `${cardData.thumbnail.path}.${cardData.thumbnail.extension}`
              : Deadpool
          }
          alt={cardData.name || cardData.title}
        />
      </div>
      <div className="card-info">
        <div className="desc-top">
          <p className="card-name">{cardData.name || cardData.title}</p>
          <button
            className="like-button"
            onClick={(event) => {
              handleLike(cardData._id);
              event.preventDefault();
              console.log(cardData._id);
            }}
          >
            Favoris ❤️
          </button>
        </div>
        <div className="description-box">
          <p className="card-description">{cardData.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
