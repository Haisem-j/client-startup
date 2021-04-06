function r_body(props) {
  return (
    <div className="r-search-body">
      <div className="r-search-body-image">
        <img id="pic" src="./images/recipeImages/t_recipe.png" alt="something" />
        <div className="r-search-body-image-gradient">
            <div className="r-search-body-image-prep-time">
                <img src="./images/recipeImages/prep_time.png" alt="cals" />
                <div className="r-search-body-image-prep-time-desc">
                    <p>Prep Time</p>
                    <span>10 min</span>
                </div>
            </div>
        </div>
      </div>
      <div className="r-search-body-details">
        <div className="r-search-body-title">{props.val.title}</div>
        <div className="r-search-body-desc">
          This homemade waffle recipe is the perfect way to enjoy a lazy weekend
          morning! Using a handful of ingredients you likely have, these
          waffles...
        </div>
        <div className="r-search-body-tags-container">
          <div className="r-search-body-tag">
            <img src="./images/recipeImages/cals.png" alt="cals" />
            <div className="r-search-body-tag-desc">
              <p>Kcals</p>
              <span>300</span>
            </div>
          </div>
          <div className="r-search-body-tag">
            <img src="./images/recipeImages/meat.png" alt="cals" />
            <div className="r-search-body-tag-desc">
              <p>Protein</p>
              <span>{props.val.calories}</span>
            </div>
          </div>
          <div className="r-search-body-tag">
            <img src="./images/recipeImages/carbs.png" alt="cals" />
            <div className="r-search-body-tag-desc">
              <p>Carbs</p>
              <span>300</span>
            </div>
          </div>
          <div className="r-search-body-tag">
            <img src="./images/recipeImages/fats.png" alt="cals" />
            <div className="r-search-body-tag-desc">
              <p>Fats</p>
              <span>300</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default r_body;
