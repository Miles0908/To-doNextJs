import { createContext } from "react";

export const MainContext = createContext({});

export const initialState = {
  username: "Claudio",
  isLogged: true,
  TodoList: [],
};

export const TodoList = [
  {
    id: 1,
    todo: "Buy some icecream",
    isDo: true,
  },
  {
    id: 2,
    todo: "Learn React",
    isDo: false,
  },
  {
    id: 3,
    todo: "Learn Sass",
    isDo: false,
  },
  {
    id: 4,
    todo: "Study for the exam",
    isDo: false,
  },
  {
    id: 5,
    todo: "Read eloquent Javascript",
    isDo: false,
  },
  {
    id: 6,
    todo: "Watch the Zuckeberg's film",
    isDo: true,
  },
];
