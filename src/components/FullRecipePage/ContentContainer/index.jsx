import SideRecipes from '../SideRecipes'
import MainRecipe from '../MainRecipe'
import RecipeDetails from '../RecipeDetails'
function ContentContainer() {
  return (
    <div className="f-recipe-page-content-container">
        <SideRecipes />
        <MainRecipe />
        <RecipeDetails />
    </div>
  );
}

export default ContentContainer;
