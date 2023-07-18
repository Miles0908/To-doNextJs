
export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        isLogged: true,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        isLogged: false,
      };
      case "ADD_TODO":
        return {
          ...state,
          TodoList: state.TodoList.concat(action.payload),
        };

    default:
      console.log(state);
      return state;
  }
};
