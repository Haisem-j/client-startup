import RecipeBody from './r_body';
let temp = [
    {
        title: "Pizza",
        calories: 700
    },
    {
        title: "Smoothie",
        calories: 200
    },
    {
        title: "Cornflakes",
        calories: 150
    },
]
function RecipeSearchBody() {
  return (
    <div className="r-search-body-container">
        {
            temp.map(recipe =>{
                return <RecipeBody val={recipe} />
            })
        }
    </div>
  );
}

export default RecipeSearchBody;
