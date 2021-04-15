import recipes from "../../../dummydata";

function SideRecipes() {
  const renderRecipes = () => {
    return recipes.map((recipe) => {
      return (
        <div className="side-recipes-recipe">
          <div className="side-recipes-recipe-image">
            <img src={recipe.image} alt="recipe" />
          </div>
          <div className="side-recipes-recipe-details">
            <div className="side-recipes-recipe-details-title">
              {recipe.name}
            </div>
            <p>{recipe.shortDescription}</p>
            <div className="side-recipes-recipe-tags">
              <div className="side-recipes-recipe-tag">{recipe.nutrients.calories}Kcal</div>
              <div className="side-recipes-recipe-tag">{recipe.nutrients.protien}P</div>
              <div className="side-recipes-recipe-tag">{recipe.nutrients.carbs}C</div>
              <div className="side-recipes-recipe-tag">{recipe.nutrients.fats}F</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="side-recipes-container">
      <div className="side-recipes-title">All Recipes</div>
      <div className="side-recipes-all">
        {renderRecipes()}
      </div>
    </div>
  );
}

export default SideRecipes;
