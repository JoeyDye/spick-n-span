import { useTodosState } from "../../providers/todosProvider";

const TodoCategorySelect = () => {
  const {
    currentCategory,
    handleCategoryChange,
  } = useTodosState();

  return (
    <select
      className="block p-2"
      value={currentCategory}
      onChange={handleCategoryChange}
    >
      <option value="all">All</option>
      <option value="kitchen">Kitchen</option>
      <option value="master">Master</option>
      <option value="nursery">Nursery</option>
    </select>
  );
};

export default TodoCategorySelect;
