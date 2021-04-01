import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";

import { useState } from "react";

import RecipeSearchBody from '../RecipeSearchBody/';

function RecipeSearchContainer() {
  const [mealType, setMealType] = useState("");
  const [tags, setTags] = useState('');
  const [calorieRange, setCalorieRange] = useState([150, 1500]);

  const handleMealType = (event) => {
    setMealType(event.target.value);
  };

  const handleCalorieRange = (e, newValue) => {
    setCalorieRange(newValue);
  };

  const handleTags = (event) => {
    setTags(event.target.value);
  };
  return (
    <div className="r-search-container">
      <div className="r-search-title">
        All Recipes <span>(45 Results)</span>
      </div>
      <div className="r-filter-container">
        <FormControl className="form-control">
          <InputLabel className="meal-type-label">Meal Type</InputLabel>
          <Select
            value={mealType}
            onChange={handleMealType}
          >
            <MenuItem value={"All"}>All Meal Types</MenuItem>
            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"Lunch"}>Lunch</MenuItem>
            <MenuItem value={"Dinner"}>Dinner</MenuItem>
            <MenuItem value={"Snack"}>Snack</MenuItem>
            <MenuItem value={"Smoothie"}>Smoothie</MenuItem>
          </Select>
        </FormControl>

        <div className="form-slider">
          <Typography id="range-slider">Calorie Range</Typography>
          <Slider
            value={calorieRange}
            onChange={handleCalorieRange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            step={50}
            max={4000}
          />
        </div>

        <TextField label="Minimum Protein (g)" type="number"  />
        <TextField label="Minimum Carbs (g)" type="number"  />
        <TextField label="Minimum Fats (g)" type="number"  />

        <FormControl  className="form-control"> 
          <InputLabel>Other Tags</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={tags}
            onChange={handleTags}
          >
            <MenuItem value={'High Protein'}>High Protein</MenuItem>
            <MenuItem value={'Low Carbs'}>Low Carbs</MenuItem>
            <MenuItem value={'Vegan'}>Vegan</MenuItem>
            <MenuItem value={'Keto'}>Keto</MenuItem>
            <MenuItem value={'Budget Friendly'}>Budget Friendly</MenuItem>
            <MenuItem value={'Quick Make'}>Quick Make</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="search-tags-container">
        <div className="tag-body">400 - 600 Kcal</div>
        <div className="tag-body">High Protein</div>
        <div className="tag-body">Low Carbs</div>
        <div className="tag-body">Budget Friendly</div>
      </div>
      <RecipeSearchBody />
    </div>
  );
}

export default RecipeSearchContainer;
