const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_MY_POSTS":
      return {
        ...state,
        myPosts: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
