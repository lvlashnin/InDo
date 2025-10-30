import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "@/app/store";
import { searchTodos } from "@/features/search/searchThunks";
import { clearSearch } from "@/features/search/searchSlice";

export default function SearchPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      dispatch(clearSearch());
    }
  }, [query, dispatch]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(searchTodos(query.trim()));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex w-full pt-4 px-4">
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 p-2 rounded-l-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
