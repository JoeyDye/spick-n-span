const Todo = ({ id, title, completeTodo }) => (
  <li>
    {title}{' '}
    <input type='checkbox' name={title} onChange={() => completeTodo(id)} />
  </li>
)

export default Todo
