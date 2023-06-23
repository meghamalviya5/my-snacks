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
        (a, b) => {
          let x = a.product_name.toLowerCase();
          let y = b.product_name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        } //a.product_name - b.product_name
      );
    } else {
      sortedByName = state.filteredSnacks.sort((a, b) => {
        let x = b.product_name.toLowerCase();
        let y = a.product_name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
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
  const sortByIngredients = () => {
    let sortedByIngred = [];
    if (state.sortIngredAsc) {
      sortedByIngred = state.filteredSnacks.sort(
        (a, b) => {
          let x = a.ingredients[0].toLowerCase();
          let y = b.ingredients[0].toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        } //a.ingredients[0] - b.ingredients[0]
      );
    } else {
      sortedByIngred = state.filteredSnacks.sort((a, b) => {
        let x = b.ingredients[0].toLowerCase();
        let y = a.ingredients[0].toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
    dispatch({
      type: "UPDATE_FILTERED_SNACKS",
      payload: {
        data: sortedByIngred,
        sortKey: "sortIngredAsc",
        sortValue: !state.sortIngredAsc,
      },
    });
  };

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

  const sortByWeight = () => {
    let sortedByWeight = [];
    if (state.sortWeightAsc) {
      sortedByWeight = state.filteredSnacks.sort((a, b) => {
        console.log(
          Number(a.product_weight.substring(0, a.product_weight.length - 1)),
          "                ==jdfnjkdf"
        );
        return (
          Number(a.product_weight.substring(0, a.product_weight.length - 1)) -
          Number(b.product_weight.substring(0, b.product_weight.length - 1))
        );
      });
    } else {
      sortedByWeight = state.filteredSnacks.sort(
        (a, b) =>
          Number(b.product_weight.substring(0, b.product_weight.length - 1)) -
          Number(a.product_weight.substring(0, a.product_weight.length - 1))
      );
    }
    dispatch({
      type: "UPDATE_FILTERED_SNACKS",
      payload: {
        data: sortedByWeight,
        sortKey: "sortWeightAsc",
        sortValue: !state.sortWeightAsc,
      },
    });
  };
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
