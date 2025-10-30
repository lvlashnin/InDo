import Header from "./components/Header";
import SearchPanel from "./components/SearchPanel";
import TodoListContainer from "./components/TodoListContainer";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { fetchTodos } from "@/features/todos/todosThunks";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <SearchPanel />
      <TodoListContainer />
    </div>
  );
}
