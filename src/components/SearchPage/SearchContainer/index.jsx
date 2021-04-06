import Search from "@material-ui/icons/Search";

function SearchContainer() {
  return (
    <div className="search-container">
      <div className="search-title">Browse Recipes Here</div>
      <div className="search-bar">
        <div className="search-temp">
          <Search className="search-icon" fontSize="large" />
          <input type="text" placeholder="Search Here..." />
        </div>
        <div className="search-button">Search</div>
      </div>
    </div>
  );
}

export default SearchContainer;
