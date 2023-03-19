import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipy";

const App = () => {
  const APP_ID = "09e2a6d4";
  const APP_KEY = "b63a923a438ff4f286dbc9db2c82d113";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipies, setRecipeis] = useState([]);
  const [search, setSearch] = useState("");
  const [quary, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [quary]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${quary}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipeis(data.hits);
  };

  const updatesearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updatesearch}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <div className="recipes">
        {recipies.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
