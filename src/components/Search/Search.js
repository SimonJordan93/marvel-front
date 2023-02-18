import "../Search/search.css";
import { DebounceInput } from "react-debounce-input";

const Search = ({
  searchValue,
  setSearchValue,
  setCurrentPage,
  placeholder,
}) => {
  return (
    <DebounceInput
      value={searchValue}
      debounceTimeout={300}
      onChange={(event) => {
        setSearchValue(event.target.value);
        setCurrentPage(1);
      }}
      className="search-input"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Search;
