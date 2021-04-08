import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const App = () => {
  
   const APP_ID = "159fc47c";
   const APP_KEY = "4e272c328a090a45e4945962452db7b0";

   const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);

   useEffect ( () => {
     getRecipes();
   }, [])

   const getRecipes = async () => {
      const response = await fetch (exampleReq)
      const data = await response.json();
      console.log(data.hits);

      setRecipes(data.hits);
   }

    
    return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
              title = {recipe.recipe.label}
              image = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}
              calories = {recipe.recipe.calories}
            />
            ))}        
        </div>
      
      </div>
    );
}

export default App;
