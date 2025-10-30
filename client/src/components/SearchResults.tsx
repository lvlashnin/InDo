import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "@/app/store";
import TodoCard from "./TodoCard";
import { clearSearch } from "@/features/search/searchSlice";

export default function SearchResults() {
  const dispatch = useDispatch<AppDispatch>();
  const { results, query, loading } = useSelector(
    (state: RootState) => state.search
  );

  if (loading) {
    return <div className="text-center text-white mt-8">Searching...</div>;
  }

  return (
    <div className="px-4 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-bold">
          Search Results for "{query}" ({results.length})
        </h2>
        <button
          onClick={() => dispatch(clearSearch())}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Clear Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((todo) => (
          <TodoCard key={todo._id} todo={todo} /> // Теперь это валидно, так как provided не обязателен
        ))}
      </div>
    </div>
  );
}
