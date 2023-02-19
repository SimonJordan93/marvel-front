import "../Characters/characters.css";
import { Link } from "react-router-dom";

// Components
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import PageShift from "../../components/PageShift/PageShift";

const Characters = ({
  characters,
  isLoading,
  handleCharactersPageDecrease,
  handleCharactersPageIncrease,
  currentCharactersPage,
  setCurrentCharactersPage,
  charactersSearch,
  setCharactersSearch,
  handleCharacterLike,
}) => {
  if (characters) {
    const totalCharacters = characters.count;
    // console.log(totalCharacters);
    // console.log(charactersSearch);

    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className="characters-main">
        <Search
          searchValue={charactersSearch}
          setSearchValue={setCharactersSearch}
          setCurrentPage={setCurrentCharactersPage}
          placeholder="Trouve tes personnages préférés !"
        />
        <div className="characters-container">
          <h2>Personnages</h2>
          <div className="characters-section">
            {characters.results.map((character, _id) => {
              return (
                <Link
                  to={`/character/${character._id}`}
                  key={character._id}
                  className="item-card"
                >
                  <Card
                    cardData={character}
                    handleLike={() => handleCharacterLike(character._id)}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <PageShift
          handlePageDecrease={handleCharactersPageDecrease}
          handlePageIncrease={handleCharactersPageIncrease}
          currentPage={currentCharactersPage}
          totalCount={totalCharacters}
        />
      </div>
    );
  }
};

export default Characters;
