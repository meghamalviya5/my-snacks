import { createContext, useReducer } from "react";
import { snacks } from "../db/snacks";
import { snacksReducer } from "../reducer/SnackReducer";

export const SnackContext = createContext();

const SnackProvider = ({ children }) => {
  const initialState = {
    allSnacks: snacks,
    filteredSnacks: snacks,
    searchInput: "",
  };

  const [state, dispatch] = useReducer(snacksReducer, initialState);

  const sortById = () => {
    const sortedById = state.filteredSnacks.sort((a, b) => a.id - b.id);
    dispatch({ type: "UPDATE_FILTERED_SNACKS", payload: sortById });
  };
  const sortByPrice = () => {};
  const sortByName = () => {};
  const sortByIngredients = () => {};
  const sortByCalories = () => {};
  const sortByWeight = () => {};

  return (
    <SnackContext.Provider
      value={{
        state,
        dispatch,
        sortById,
        sortByName,
        sortByPrice,
        sortByWeight,
        sortByCalories,
        sortByIngredients,
      }}
    >
      {children}
    </SnackContext.Provider>
  );
};

export default SnackProvider;
