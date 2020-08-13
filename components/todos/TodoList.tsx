import Todo from "./Todo";

const TodosList = ({ todos, currentCategory, completeTodo }) => (
  <ul>
    {todos
      .filter(
        ({ category, complete }) =>
          !complete && currentCategory === "all" ||
          category === currentCategory,
      )
      .map((todo) => (
        <Todo key={todo.id} {...todo} completeTodo={completeTodo} />
      ))}
  </ul>
);

export default TodosList;
