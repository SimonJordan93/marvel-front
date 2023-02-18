import "../Comics/comics.css";

const Comics = ({ comics, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="comics-main">
      <div className="comics-container">
        <h2>Comics</h2>
        <div className="comics-section">
          {comics.results.map((comics, _id) => {
            return (
              <div key={comics._id} className="comics-card">
                <div className="comics-img">
                  <img
                    src={
                      comics.thumbnail.path + "." + comics.thumbnail.extension
                    }
                    alt={comics.name}
                  />
                </div>
                <div className="comics-info">
                  <p className="comics-name">{comics.name}</p>
                  <p className="comics-description">{comics.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comics;
