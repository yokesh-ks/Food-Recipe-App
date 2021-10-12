import './css/style.css';
import Navbar from './Components/navbar'
import Axios from "axios";
import {useState} from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = "42047176";
  const YOUR_APP_KEY = "58e3b9f86b072df9e49165c938cf9a4c";
  
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input 
          type="text" 
          className="app__input"
          placement="Enter Ingridient" 
          value={query} 
          onChange={(e) => setquery(e.target.value)}
        />
        <input 
          type="submit"
          className="app__submit" 
          value="Search"
        />
      </form>

      <div className="app__recipes">
        {recipes.map((recipe)=> {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
