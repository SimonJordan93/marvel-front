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
              handleLike(
                `${cardData.thumbnail.path}.${cardData.thumbnail.extension}`,
                cardData.name || cardData.title,
                cardData.description
              );
              event.preventDefault();
              // console.log(
              //   `${cardData.thumbnail.path}.${cardData.thumbnail.extension}`
              // );
              // console.log(cardData.name || cardData.title);
              // console.log(cardData.description);
            }}
          >
            Favoris ❤️
          </button>
        </div>
        <p className="card-description">{cardData.description}</p>
      </div>
    </>
  );
};

export default Card;
