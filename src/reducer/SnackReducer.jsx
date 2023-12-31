export const snacksReducer = (state, action) => {
  console.log("inreducer");
  switch (action.type) {
    case "SEARCH_SNACKS":
      const updatedSnacks = state.allSnacks.filter((snack) => {
        if (
          snack.product_name
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          snack.ingredients.filter((ingred) =>
            ingred.toLowerCase().includes(action.payload.toLowerCase())
          ).length > 0
        ) {
          return true;
        }
        return false;
      });
      return {
        ...state,
        searchInput: action.payload,
        filteredSnacks: updatedSnacks,
      };

    case "UPDATE_FILTERED_SNACKS":
      return {
        ...state,
        filteredSnacks: action.payload.data,
        [action.payload.sortKey]: action.payload.sortValue,
      };
    default:
      return { state };
  }
};
