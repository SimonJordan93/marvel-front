import "../Card/card.css";

const Card = ({ cardData, handleLike }) => {
  return (
    <>
      <div className="card-img">
        <img
          src={`${cardData.thumbnail.path}.${cardData.thumbnail.extension}`}
          alt={cardData.name || cardData.title}
        />
        <button
          className="like-button"
          onClick={(event) => {
            handleLike(
              `${cardData.thumbnail.path}.${cardData.thumbnail.extension}`,
              cardData.name || cardData.title,
              cardData.description
            );
            event.preventDefault();
          }}
        >
          ❤️
        </button>
      </div>
      <div className="card-info">
        <p className="card-name">{cardData.name || cardData.title}</p>
        <p className="card-description">{cardData.description}</p>
      </div>
    </>
  );
};

export default Card;
