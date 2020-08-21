import { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import TodoCategorySelect from "./TodoCategorySelect";
import TodoInput from "./TodoInput";
import TodosList from "./TodoList";
import { useTodosState } from "../../providers/todosProvider";

const Todos = () => {
  const {
    getTodos,
  } = useTodosState();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <TodoCategorySelect />
      <TodoInput />
      <TodosList />
    </>
  );
};

export default Todos;
