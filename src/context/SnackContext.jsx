import { createContext, useReducer } from "react";
import { snacks } from "../db/snacks";
import { snacksReducer } from "../reducer/SnackReducer";

export const SnackContext = createContext();

const SnackProvider = ({ children }) => {
  const initialState = {
    allSnacks: snacks,
    filteredSnacks: snacks,
    searchInput: "",
    sortIdAsc: true,
    sortNameAsc: true,
    sortPriceAsc: true,
    sortCaloriesAsc: true,
    sortIngredAsc: true,
    sortWeightAsc: true,
  };

  const [state, dispatch] = useReducer(snacksReducer, initialState);

  const sortById = () => {
    let sortedById = [];
    if (state.sortIdAsc) {
      sortedById = state.filteredSnacks.sort((a, b) => a.id - b.id);
    } else {
      sortedById = state.filteredSnacks.sort((a, b) => b.id - a.id);
    }
    dispatch({
      type: "UPDATE_FILTERED_SNACKS",
      payload: {
        data: sortedById,
        sortKey: "sortIdAsc",
        sortValue: !state.sortIdAsc,
      },
    });
  };
  const sortByPrice = () => {};
  const sortByName = () => {};
  const sortByIngredients = () => {};
  const sortByCalories = () => {};
  const sortByWeight = () => {};
  console.log(state, "-======ncontext");

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
