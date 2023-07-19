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
    case "SET_TODO_COMPLETED":
      return {
        ...state,
        TodoList: state.TodoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isDo: !todo.isDo }
            : todo
        ),
      };
      case "REMOVE_TODO":
        return {
          ...state,
          TodoList: state.TodoList.filter((todo) => todo.id !== action.payload),
        };
  

    default:
      console.log(state);
      return state;
  }
};
