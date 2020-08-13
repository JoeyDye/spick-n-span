import { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import TodoCategorySelect from "./TodoCategorySelect";
import TodoInput from "./TodoInput";
import TodosList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const collectionRef = await firestore.collection("todos");
      collectionRef.onSnapshot((querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setTodos(todos);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const [todo, setTodo] = useState({ id: 0, title: "" });

  const [currentCategory, setCurrentCategory] = useState("all");

  const handleTodoChange = (e) =>
    setTodo({ title: e.target.value, category: "Kitchen" });

  const handleTodoSubmit = async () => {
    try {
      const collectionRef = await firestore.collection("todos");
      await collectionRef.add({
        title: todo.title,
        category: "kitchen",
      });
    } catch (error) {
      console.log(error);
    }
    setTodo({ id: 0, title: "" });
  };

  const completeTodo = async (id) => {
    const collectionRef = await firestore.collection("todos");
    await collectionRef.doc(id).update({ complete: true });
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCategoryChange = (e) => setCurrentCategory(e.target.value);

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
  );
};

export default Todos;
