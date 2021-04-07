
function SideRecipes() {
    return (
      <div className="side-recipes-container">
          <div className="side-recipes-title">
            All Recipes
          </div>
          <div className="side-recipes-all">
            <div className="side-recipes-recipe">
              <div className="side-recipes-recipe-image">
                <img src="/images/recipeImages/t_recipe.png" alt="recipe"/>
                {/* <div className="side-recipes-recipe-gradient"></div> */}
              </div>
              <div className="side-recipes-recipe-details">
                <div className="side-recipes-recipe-details-titl">Whole Wheat Burrito</div>
                <p>A single line of text describing the recipe</p>
                <div className="side-recipes-recipe-tags">
                  <div className="side-recipes-recipe-tag"></div>
                  <div className="side-recipes-recipe-tag"></div>
                  <div className="side-recipes-recipe-tag"></div>
                  <div className="side-recipes-recipe-tag"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default SideRecipes;
  