const Card = ({ cardData, handleLike, cardType }) => {
  return (
    <div className={`${cardType}-card`}>
      <div className={`${cardType}-img`}>
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
      <div className={`${cardType}-info`}>
        <p className={`${cardType}-name`}>{cardData.name || cardData.title}</p>
        <p className={`${cardType}-description`}>{cardData.description}</p>
      </div>
    </div>
  );
};

export default Card;
