import MainRecipeView from "./MainRecipeView";

import recipes from "../../../../dummydata";

export function MainRecipeContainer() {
  return (
    <>
      <MainRecipeView recipes={recipes} />
    </>
  );
}
