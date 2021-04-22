import SideRecipesContainer from "./components/SideRecipes/SideRecipesContainer";
import MainRecipeContainer from './components/MainRecipe/MainRecipeContainer'
import RecipeDetailsContainer from "./components/RecipeDetails/RecipeDetailsContainer";

import { connect } from "react-redux";

const FullRecipeContainer = ({ isCollapsed }) => {
    return(
        <div className="f-recipe-page-content-container" style={isCollapsed ? {width: "96%"} : null}>
          <SideRecipesContainer />
          <MainRecipeContainer />
          <RecipeDetailsContainer />
        </div>
    )
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(FullRecipeContainer);
