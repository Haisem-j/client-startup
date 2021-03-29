import SearchContainer from '../SearchContainer/index.jsx'
import RecipeSearchContainer from '../RecipeSearchContainer/index'

function ContentContainer() {
  return (
    <div className="content-container">
      <SearchContainer />
      <RecipeSearchContainer />
    </div>
  );
}

export default ContentContainer;
