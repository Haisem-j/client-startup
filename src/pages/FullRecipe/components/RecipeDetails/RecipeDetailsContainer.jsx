import RecipeDetailsView from './RecipeDetailsView'

import recipes from "../../../../dummydata";

export function RecipeDetailsContainer() {
  return (
    <>
        <RecipeDetailsView recipe={recipes}/>      
    </>
  );
}
