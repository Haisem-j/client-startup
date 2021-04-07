import SideRecipes from "../SideRecipes";
import MainRecipe from "../MainRecipe";
import RecipeDetails from "../RecipeDetails";

import { connect } from "react-redux";

function ContentContainer(props) {
  if (!props.isCollapsed) {
    return (
      <div className="f-recipe-page-content-container">
        <SideRecipes />
        <MainRecipe />
        <RecipeDetails />
      </div>
    );
  }else{
    return (
      <div className="f-recipe-page-content-container" style={{width: "96%"}}>
        <SideRecipes />
        <MainRecipe />
        <RecipeDetails />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(ContentContainer);
