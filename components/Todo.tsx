const Todo = ({ id, title, category, completeTodo }) => (
  <li>
    <span className="mr-1">{title}</span>
    <input
      className="mr-1"
      type="checkbox"
      name={title}
      onChange={() => completeTodo(id)}
    />
    <small>{category}</small>
  </li>
);

export default Todo;
