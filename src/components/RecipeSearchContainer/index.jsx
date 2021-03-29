function RecipeSearchContainer() {
  return (
    <div className="r-search-container">
      <div className="r-search-title">
        All Recipes <span>(45 Results)</span>
      </div>
        <div className="r-filter-container">
          <select id="mealtype" name="mealtype" className="r-filters">
            <option value="" disabled selected hidden>Meal Type</option>
            <option value="All">All Meal Types</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          {/* <input type="number" id="max-calories" className="r-filters" min="0" max="6000" placeholder="Calories >"/>
          <input type="number" id="min-protein" className="r-filters" min="0" max="6000" placeholder="Protein"/>
          <input type="number" id="min-fat" className="r-filters" min="0" max="6000"  placeholder="Fat"/>
          <input type="number" id="min-carbs" className="r-filters" min="0" max="6000" placeholder="Carbs"/> */}
        </div>
    </div>
  );
}

export default RecipeSearchContainer;
