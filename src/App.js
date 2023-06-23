import { useContext } from "react";
import "./App.css";
import { SnackContext } from "./context/SnackContext";

function App() {
  const {
    state,
    dispatch,
    sortById,
    sortByName,
    sortByPrice,
    sortByWeight,
    sortByCalories,
    sortByIngredients,
  } = useContext(SnackContext);

  return (
    <div className="App">
      <h1>Snack Table</h1>
      <input
        placeholder="Search with Products or Ingredients..."
        value={state.searchInput}
        onChange={(e) =>
          dispatch({ type: "SEARCH_SNACKS", payload: e.target.value })
        }
      />
      <table className="snack-table">
        <tr>
          <th>
            <button onClick={() => sortById()}>ID</button>
          </th>

          <th>
            <button onClick={() => sortByName()}>Product Name</button>
          </th>

          <th>
            <button onClick={() => sortByWeight()}>Product Weight </button>
          </th>

          <th>
            <button onClick={() => sortByCalories()}>Calories </button>
          </th>

          <th>
            <button onClick={() => sortByPrice()}>Price </button>
          </th>

          <th>
            <button onClick={() => sortByIngredients()}>Ingredients</button>
          </th>
        </tr>
        {state.filteredSnacks.map((filteredSnack) => (
          <tr>
            <td>{filteredSnack.id}</td>
            <td>{filteredSnack.product_name}</td>
            <td>{filteredSnack.product_weight}</td>
            <td>{filteredSnack.price}</td>
            <td>{filteredSnack.calories}</td>
            <td>{filteredSnack.ingredients.map((ingred) => ingred + ", ")}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
