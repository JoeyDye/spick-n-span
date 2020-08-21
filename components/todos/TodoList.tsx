import Todo from "./Todo";
import { useTodosState } from "../../providers/todosProvider";

const TodosList = () => {
  const {
    todos,
    currentCategory,
    handleCompleteTodo,
    handleDeleteTodo,
  } = useTodosState();

  return (
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
};

export default TodosList;
