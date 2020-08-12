import { useState } from "react";
import TodoCategorySelect from "./TodoCategorySelect";
import TodoInput from "./TodoInput";
import TodosList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Dust", category: "kitchen" },
    { id: 2, title: "Vacuum", category: "master" },
    { id: 3, title: "Windex", category: "nursery" },
  ]);

  const [todo, setTodo] = useState({ id: 0, title: "" });

  const [currentCategory, setCurrentCategory] = useState("all");

  const handleTodoChange = (e) =>
    setTodo({ id: todos.length + 1, title: e.target.value });

  const handleTodoSubmit = () => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
    setTodo({ id: 0, title: "" });
  };

  const completeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const handleCategoryChange = (e) => setCurrentCategory(e.target.value);

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
        completeTodo={completeTodo}
      />
    </>
  );
};

export default Todos;
