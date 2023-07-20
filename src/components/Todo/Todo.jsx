import { MainContext } from "@/state";
import { useContext } from "react";

import { TodoList } from "@/state";
import { useState } from "react";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

import styles from "./Todo.module.scss";
import { db } from "@/plugins/firebase";

const Todo = () => {
  const { state, dispatch } = useContext(MainContext);
  const [newTodo, setNewTodo] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = async (e) => {
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

      await addDoc(collection(db, "TodoList"), newTask);

      setNewTodo("");
      console.log({ newTask });
    }
  };

  const onConfirmTodo = async (id) => {
    dispatch({
      type: "SET_TODO_COMPLETED",
      payload: id,
    });
    await updateDoc(doc(db, "TodoList", id), {
      isDo: !isDo,
    });
  };

  const onHandleDelete = async (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });

    try {
      await deleteDoc(doc(db, "TodoList", id));
    } catch (e) {}
  };

  const onHandleDrag = (e) => {
    e.target.style.display = "none";
    e.target.style.content = "🗑️";
  };

  return (
    <div className={styles.Todo}>
      <form action="submit" className={styles.newTask}>
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
      {state.TodoList.map((todo) => {
        return (
          <p
            onDragEnd={onHandleDelete}
            onDrag={onHandleDrag}
            draggable="true"
            className={`${styles.singletodo} ${
              todo.isDo ? styles.completed : styles.uncompleted
            }`}
            key={todo.id}
          >
            {todo.todo}

            {
              <div
                className={styles.confirm}
                onClick={() => onConfirmTodo(todo.id)}
              >
                {todo.isDo ? "Click for remove " : "Click for confirm "}
                {todo.isDo ? "❌" : "✅"}
              </div>
            }
          </p>
        );
      })}
    </div>
  );
};

export default Todo;

/*         const todoIsDo = todo.isDo ? styles.completed : styles.uncompleted;

{/* 
{TodoList.map((todo) => {
        const todoIsDo = todo.isDo ? styles.completed : styles.uncompleted;
        return (
          <p className={`${styles.singletodo} ${todoIsDo}`} key={todo.id}>
            {todo.todo}
          </p>
        );
      })} */
