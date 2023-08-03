const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
