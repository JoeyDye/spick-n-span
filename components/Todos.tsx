import { useState } from 'react'

import Todo from './Todo'

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Dust' },
    { id: 2, title: 'Vacuum' },
    { id: 3, title: 'Windex' },
  ])

  const [todo, setTodo] = useState({ id: 0, title: '' })

  const handleTodoChange = e =>
    setTodo({ id: todos.length + 1, title: e.target.value })

  const handleSubmitTodo = () => {
    setTodos(prevTodos => [todo, ...prevTodos])
    setTodo({ id: 0, title: '' })
  }

  const completeTodo = id =>
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))

  return (
    <>
      <form onSubmit={handleSubmitTodo}>
        <input
          type='text'
          placeholder='Add todo'
          onChange={handleTodoChange}
          value={todo.title}
        />
      </form>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} completeTodo={completeTodo} />
        ))}
      </ul>
    </>
  )
}

export default Todos
