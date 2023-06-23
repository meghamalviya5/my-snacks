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
  const sortByPrice = () => {
    let sortedByPrice = [];
    if (state.sortPriceAsc) {
      sortedByPrice = state.filteredSnacks.sort((a, b) => a.price - b.price);
    } else {
      sortedByPrice = state.filteredSnacks.sort((a, b) => b.price - a.price);
    }
    dispatch({
      type: "UPDATE_FILTERED_SNACKS",
      payload: {
        data: sortedByPrice,
        sortKey: "sortPriceAsc",
        sortValue: !state.sortPriceAsc,
      },
    });
  };
  const sortByName = () => {
    let sortedByName = [];
    if (state.sortNameAsc) {
      sortedByName = state.filteredSnacks.sort(
        (a, b) => a.product_name - b.product_name
      );
    } else {
      sortedByName = state.filteredSnacks.sort(
        (a, b) => b.product_name - a.product_name
      );
    }
    dispatch({
      type: "UPDATE_FILTERED_SNACKS",
      payload: {
        data: sortedByName,
        sortKey: "sortNameAsc",
        sortValue: !state.sortNameAsc,
      },
    });
  };
  const sortByIngredients = () => {};
  const sortByCalories = () => {
    let sortedByCalories = [];
    if (state.sortCaloriesAsc) {
      sortedByCalories = state.filteredSnacks.sort(
        (a, b) => a.calories - b.calories
      );
    } else {
      sortedByCalories = state.filteredSnacks.sort(
        (a, b) => b.calories - a.calories
      );
    }
    dispatch({
      type: "UPDATE_FILTERED_SNACKS",
      payload: {
        data: sortedByCalories,
        sortKey: "sortCaloriesAsc",
        sortValue: !state.sortCaloriesAsc,
      },
    });
  };
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
