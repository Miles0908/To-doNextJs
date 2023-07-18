import { MainContext } from "@/state";
import { useContext } from "react";

import { TodoList } from "@/state";
import { useState } from "react";

import styles from "./Todo.module.scss";
console.log(TodoList);

const Todo = () => {
  const { state, dispatch } = useContext(MainContext);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (newTodo.trim() !== "") {
      const newTask = {
        id: state.TodoList.length + 1,
        todo: newTodo,
        isDo: false,
      };
      dispatch({
        type: "ADD_TODO",
        payload: newTask,
      });

      setNewTodo("");
      console.log("click");
    }
  };

  return (
    <div className={styles.Todo}>
      {TodoList.map((todo) => {
        const todoIsDo = todo.isDo ? styles.completed : styles.uncompleted;
        return (
          <p className={`${styles.singletodo} ${todoIsDo}`} key={todo.id}>
            {todo.todo}
          </p>
        );
      })}

      <form action="submit" className={styles.newTask}>
        {state.TodoList.map((todo) => {
          const todoIsDo = todo.isDo ? styles.completed : styles.uncompleted;
          return (
            <p className={`${styles.singletodo} ${todoIsDo}`} key={todo.id}>
              {todo.todo}
            </p>
          );
        })}

        <input
          className={styles.inputNewTask}
          type="text"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className={styles.inputBtn} onClick={addTodo}>
          +
        </button>
      </form>
    </div>
  );
};

export default Todo;
