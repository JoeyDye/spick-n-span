import { useState } from "react";
import { prevDef } from "../utils/prevDef";

import Todo from "./Todo";
import { prevDefault } from "../utils/prevDefault";

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
        className="block p-2"
        value={currentCategory}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="kitchen">Kitchen</option>
        <option value="master">Master</option>
        <option value="nursery">Nursery</option>
      </select>
      <form
        onSubmit={(e) => prevDefault(e, handleSubmitTodo)}
      >
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Add todo"
          onChange={handleTodoChange}
          value={todo.title}
        />
      </form>
      <ul>
        {todos.filter(({ category }) =>
          currentCategory === "all" || category === currentCategory
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
