import recipes from "../../../dummydata";

function MainRecipe() {
  const renderInstructions = () => {
    return recipes[0].instructions.map((step, index) => {
      return (
        <div className="m-recipe-steps-details">
          <div className="m-recipe-steps-details-step-number">0{index + 1}</div>
          <div className="m-recipe-steps-details-step">
            {step}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="main-recipe-container">
      <div className="m-recipe-container-details">
        <div className="m-recipe-container-details-title">
          {recipes[0].name}
        </div>
        <div className="m-recipe-container-details-description">
          {recipes[0].longDescription}
        </div>
        <div className="m-recipe-container-details-tags-container">
          <div className="m-recipe-container-details-tag">
            <img src="./images/recipeImages/cals.png" alt="cals" />
            <div className="m-recipe-container-details-tag-description">
              <p>Kcals</p>
              <span>{recipes[0].nutrients.calories}</span>
            </div>
          </div>
          <div className="m-recipe-container-details-tag">
            <img src="./images/recipeImages/meat.png" alt="protein" />
            <div className="m-recipe-container-details-tag-description">
              <p>Protein</p>
              <span>{recipes[0].nutrients.protien}g</span>
            </div>
          </div>
          <div className="m-recipe-container-details-tag">
            <img src="./images/recipeImages/carbs.png" alt="cals" />
            <div className="m-recipe-container-details-tag-description">
              <p>Carbs</p>
              <span>{recipes[0].nutrients.carbs}g</span>
            </div>
          </div>
          <div className="m-recipe-container-details-tag">
            <img src="./images/recipeImages/fats.png" alt="cals" />
            <div className="m-recipe-container-details-tag-description">
              <p>Fats</p>
              <span>{recipes[0].nutrients.fats}g</span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-recipe-container-steps">
        <div className="m-recipe-steps-title">How to make it</div>
        {renderInstructions()}
      </div>
    </div>
  );
}

export default MainRecipe;
