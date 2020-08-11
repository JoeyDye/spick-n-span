import { useState } from "react";

import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Dust", category: "kitchen" },
    { id: 2, title: "Vacuum", category: "master" },
    { id: 3, title: "Windex", category: "nursery" },
  ]);

  const [todo, setTodo] = useState({ id: 0, title: "" });

  const [currentCategory, setCurrentCategory] = useState("");

  const handleTodoChange = (e) =>
    setTodo({ id: todos.length + 1, title: e.target.value });

  const handleSubmitTodo = () => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
    setTodo({ id: 0, title: "" });
  };

  const completeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const handleCategoryChange = (e) => setCurrentCategory(e.target.value);

  return (
    <>
      <select
        value={currentCategory}
        onChange={handleCategoryChange}
      >
        <option value="kitchen">kitchen</option>
        <option value="master">master</option>
        <option value="nursery">nursery</option>
      </select>
      <form onSubmit={handleSubmitTodo}>
        <input
          type="text"
          placeholder="Add todo"
          onChange={handleTodoChange}
          value={todo.title}
        />
      </form>
      <ul>
        {todos.filter(({ category }) =>
          !currentCategory || category === currentCategory
        ).map((
          todo,
        ) => (
          <Todo key={todo.id} {...todo} completeTodo={completeTodo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
