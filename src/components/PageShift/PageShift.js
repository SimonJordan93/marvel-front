import "../PageShift/pageshift.css";

const PageShift = ({
  handlePageDecrease,
  handlePageIncrease,
  currentPage,
  totalCount,
}) => {
  return (
    <div className="page-shift">
      {currentPage > 1 && currentPage < totalCount / 100 ? (
        <>
          <button
            onClick={handlePageDecrease}
            className="previous-page page-btn"
          >
            Précédent
          </button>
          <button onClick={handlePageIncrease} className="page-btn">
            Suivant
          </button>
        </>
      ) : currentPage === 1 && totalCount > 100 ? (
        <button onClick={handlePageIncrease} className="page-btn">
          Suivant
        </button>
      ) : totalCount - 100 > 100 ? (
        <button onClick={handlePageDecrease} className="page-btn">
          Précédent
        </button>
      ) : null}
    </div>
  );
};

export default PageShift;
