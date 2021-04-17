function RecipeDetails() {
  return (
    <div className="recipe-details-container">
      <div className="r-details-image">
        <img src="/images/recipeImages/t_recipe.png" alt="main recipe" />
      </div>
      <div className="r-details-ingredients-list">
        <div className="r-details-ingredients-list-title">Ingredients</div>
        <div className="r-details-ingredients-list-servings">
          <div className="r-details-ingredients-list-servings-size">
            <div className="r-details-ingredients-list-servings-size-less r-d-i-l-minus">-</div>
            <div className="r-details-ingredients-list-servings-size-total">Servings 01</div>
            <div className="r-details-ingredients-list-servings-size-less r-d-i-l-plus">+</div>
          </div>
          <div className="r-details-ingredients-list-servings-type">
            <select name="serving system">
              <option value="volvo">Metric</option>
              <option value="volvo">Imperial</option>
            </select>
          </div>
        </div>
        <div className="r-details-ingredients-ing-list"></div>
      </div>
      <div className="r-details-nutrition-facts"></div>
    </div>
  );
}

export default RecipeDetails;
