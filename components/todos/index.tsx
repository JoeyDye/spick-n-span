import { useState, useEffect } from 'react'
import { firestore } from '../../firebase'
import TodoCategorySelect from './TodoCategorySelect'
import TodoInput from './TodoInput'
import TodosList from './TodoList'

const Todos = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const collectionRef = await firestore.collection('todos')

      const snapshot = await collectionRef.get()

      const todos = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })

      setTodos(todos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  const [todo, setTodo] = useState({ id: 0, title: '' })

  const [currentCategory, setCurrentCategory] = useState('all')

  const handleTodoChange = e =>
    setTodo({ id: todos.length + 1, title: e.target.value })

  const handleTodoSubmit = () => {
    setTodos(prevTodos => [todo, ...prevTodos])
    setTodo({ id: 0, title: '' })
  }

  const completeTodo = id =>
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))

  const handleCategoryChange = e => setCurrentCategory(e.target.value)

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
  )
}

export default Todos
