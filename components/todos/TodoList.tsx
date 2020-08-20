import Todo from "./Todo";

const TodosList = (
  { todos, currentCategory, handleCompleteTodo, handleDeleteTodo },
) => (
  <ul>
    {todos
      .filter(
        ({ category, complete }) =>
          !complete && currentCategory === "all" ||
          category === currentCategory,
      )
      .map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={() => handleDeleteTodo(todo.id)}
        />
      ))}
  </ul>
);

export default TodosList;
