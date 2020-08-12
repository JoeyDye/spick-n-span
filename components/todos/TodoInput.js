import { prevDefault } from '../../utils/prevDefault'

const TodoInput = ({ handleTodoChange, handleTodoSubmit, todoTitle }) => (
  <form onSubmit={e => prevDefault(e, handleTodoSubmit)}>
    <input
      className='text-input text-input:focus'
      type='text'
      placeholder='Add todo'
      onChange={handleTodoChange}
      value={todoTitle}
    />
  </form>
)

export default TodoInput
