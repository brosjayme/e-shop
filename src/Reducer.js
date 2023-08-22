//will define all application level states and define actions to make changes
export const initialState = {
  basket: [],
};

//selector
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.state, action.item],
      };
  }
};

export default reducer;
