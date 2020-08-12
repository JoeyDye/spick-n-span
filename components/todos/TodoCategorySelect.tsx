const TodoCategorySelect = ({ currentCategory, handleCategoryChange }) => (
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

export default TodoCategorySelect;
