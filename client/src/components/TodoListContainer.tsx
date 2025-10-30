import { useSelector } from "react-redux";
import { type RootState } from "@/app/store";
import TodosBoard from "./TodoBoard";
import SearchResults from "./SearchResults";

export default function TodoListContainer() {
  const { items: todos } = useSelector((state: RootState) => state.todos);
  const { query: searchQuery } = useSelector(
    (state: RootState) => state.search
  );

  // If there is an active search query, show search results.
  // Otherwise, show the default board.
  return <>{searchQuery ? <SearchResults /> : <TodosBoard todos={todos} />}</>;
}
