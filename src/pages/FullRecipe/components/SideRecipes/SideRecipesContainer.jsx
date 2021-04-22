import SideRecipesView from './SideRecipesView'

import recipes from '../../../../dummydata';

export function SideRecipesContainer(){
    return(
        <>
            <SideRecipesView recipes={recipes}/>
        </>
    )
}