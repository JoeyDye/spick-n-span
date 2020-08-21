import { prevDefault } from '../../utils/prevDefault'
import { useTodosState } from '../../providers/todosProvider'

const TodoInput = () => {
  const { todo, handleTodoChange, handleTodoSubmit } = useTodosState()

  return (
    <form onSubmit={e => prevDefault(e, handleTodoSubmit)}>
      <input
        className='text-input text-input:focus'
        type='text'
        placeholder='Add todo'
        onChange={handleTodoChange}
        value={todo.title}
      />
    </form>
  )
}

export default TodoInput
