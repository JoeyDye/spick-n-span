import { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import TodoCategorySelect from "./TodoCategorySelect";
import TodoInput from "./TodoInput";
import TodosList from "./TodoList";
import { useTodosState } from "../../providers/todosProvider";

const Todos = () => {
  const {
    todo,
    todos,
    currentCategory,
    handleCategoryChange,
    getTodos,
    handleTodoChange,
    handleTodoSubmit,
    handleCompleteTodo,
    handleDeleteTodo,
  } = useTodosState();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <TodoCategorySelect
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <TodoInput
        handleTodoChange={handleTodoChange}
        handleTodoSubmit={handleTodoSubmit}
        todoTitle={todo.title}
      />
      <TodosList
        todos={todos}
        currentCategory={currentCategory}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};

export default Todos;
