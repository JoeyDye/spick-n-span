import { createContext, useState, useContext } from "react";
import { firestore } from "../firebase";

const TodosContext = createContext({
  todo: {},
  todos: [],
  currentCategory: "",
  getTodos: () => {},
  handleTodoChange: (e) => {},
  handleTodoSubmit: () => {},
  handleCompleteTodo: (id: string) => {},
  handleDeleteTodo: (id: string) => {},
  handleCategoryChange: (e) => {},
});

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: "", category: "" });
  const [currentCategory, setCurrentCategory] = useState("all");

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

  const handleCompleteTodo = async (id: string) => {
    try {
      const collectionRef = await firestore.collection("todos");
      await collectionRef.doc(id).update({ complete: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      const collectionRef = await firestore.collection("todos");
      await collectionRef.doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (e) => setCurrentCategory(e.target.value);

  return (
    <TodosContext.Provider
      value={{
        todo,
        todos,
        currentCategory,
        getTodos,
        handleTodoChange,
        handleTodoSubmit,
        handleCompleteTodo,
        handleDeleteTodo,
        handleCategoryChange,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosState = () => useContext(TodosContext);

export default TodosProvider;
