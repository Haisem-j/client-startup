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
        <div className="r-details-ingredients-ing-list">
          <div className="r-details-ing">
            <div className="r-detail-ing-name-check">
            <div className="r-detail-ing-check">✓</div>
            <div className="r-detail-ing-name">
              rolled oats
            </div>
              
            </div>
            <div className="r-detail-ing-amount">45g</div>
          </div>
          <div className="r-details-ing">
            <div className="r-detail-ing-name-check">
            <div className="r-detail-ing-check">✓</div>
            <div className="r-detail-ing-name">
              rolled oats
            </div>
              
            </div>
            <div className="r-detail-ing-amount">45g</div>
          </div>
          <div className="r-details-ing">
            <div className="r-detail-ing-name-check">
            <div className="r-detail-ing-check">✓</div>
            <div className="r-detail-ing-name">
              rolled oats
            </div>
              
            </div>
            <div className="r-detail-ing-amount">45g</div>
          </div>
          <div className="r-details-ing">
            <div className="r-detail-ing-name-check">
            <div className="r-detail-ing-check">✓</div>
            <div className="r-detail-ing-name">
              rolled oats
            </div>
              
            </div>
            <div className="r-detail-ing-amount">45g</div>
          </div>
          <div className="r-details-ing">
            <div className="r-detail-ing-name-check">
            <div className="r-detail-ing-check">✓</div>
            <div className="r-detail-ing-name">
              rolled oats
            </div>
              
            </div>
            <div className="r-detail-ing-amount">45g</div>
          </div>
          <div className="r-details-ing">
            <div className="r-detail-ing-name-check">
            <div className="r-detail-ing-check">✓</div>
            <div className="r-detail-ing-name">
              rolled oats
            </div>
              
            </div>
            <div className="r-detail-ing-amount">45g</div>
          </div>
          <div className="r-details-ing">
            <div className="r-detail-ing-name-check">
            <div className="r-detail-ing-check">✓</div>
            <div className="r-detail-ing-name">
              rolled oats
            </div>
              
            </div>
            <div className="r-detail-ing-amount">45g</div>
          </div>
        </div>
      </div>
      <div className="r-details-nutrition-facts">
          <div className="r-details-nutrition-facts-title">Nutrition Facts</div>
          <div className="r-details-nutrition-facts-a-serving">Amounts per serving</div>
          <div className="r-details-nutrition-facts-calories">Calories <span>230</span></div>
          <div className="r-details-nutrition-facts-dvalue">% Daily Value</div>
          <div className="r-details-nutrition-facts-macros">
            <div className="r-details-macros-total">Total Fat <span>8g</span></div>
            <div className="r-details-macros-dv">12%</div>
          </div>
          <div className="r-details-nutrition-facts-macros">
            <div className="r-details-macros-total">Total Carbohydrates <span>37g</span></div>
            <div className="r-details-macros-dv">5%</div>
          </div>
          <div className="r-details-nutrition-facts-macros">
            <div className="r-details-macros-total">Total Proteins <span>25g</span></div>
            <div className="r-details-macros-dv">37%</div>
          </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
