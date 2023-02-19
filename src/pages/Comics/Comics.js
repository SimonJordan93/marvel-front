import "../Comics/comics.css";

// Components
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import PageShift from "../../components/PageShift/PageShift";

const Comics = ({
  comics,
  isLoading,
  handleComicsPageDecrease,
  handleComicsPageIncrease,
  currentComicsPage,
  setCurrentComicsPage,
  comicsSearch,
  setComicsSearch,
  handleComicsLike,
}) => {
  if (comics) {
    const totalComics = comics.count;
    // console.log(totalComics);
    // console.log(comicsSearch);

    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className="comics-main">
        <Search
          searchValue={comicsSearch}
          setSearchValue={setComicsSearch}
          setCurrentPage={setCurrentComicsPage}
          placeholder="Trouves tes comics préférés !"
        />
        <div className="comics-container">
          <h2>Comics</h2>
          <div className="comics-section">
            {comics.results.map((comic, _id) => {
              return (
                <div className="item-card" key={comic._id}>
                  <Card cardData={comic} handleLike={handleComicsLike} />
                </div>
              );
            })}
          </div>
        </div>
        <PageShift
          handlePageDecrease={handleComicsPageDecrease}
          handlePageIncrease={handleComicsPageIncrease}
          currentPage={currentComicsPage}
          totalCount={totalComics}
        />
      </div>
    );
  }
};

export default Comics;
