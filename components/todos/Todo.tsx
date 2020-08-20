const Todo = (
  { id, title, category, handleCompleteTodo, handleDeleteTodo },
) => (
  <li>
    <span className="mr-1">{title}</span>
    <input
      className="mr-1"
      type="checkbox"
      name={title}
      onChange={() => handleCompleteTodo(id)}
    />
    <small>{category}</small>
    <span onClick={handleDeleteTodo} style={{ cursor: "pointer" }}>X</span>
  </li>
);

export default Todo;
