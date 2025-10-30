import { createAsyncThunk } from "@reduxjs/toolkit";
import { type RootState } from "@/app/store";
import { type Todo } from "@/types";

// This is a client-side search for demonstration.
// You can replace this with an API call to your backend.
// For example: `const response = await axios.get(`/api/todos/search?q=${query}`);`
export const searchTodos = createAsyncThunk<
  Todo[], // Return type
  string, // Argument type
  { state: RootState }
>("search/searchTodos", async (query, { getState }) => {
  const { items } = getState().todos;
  const lowercasedQuery = query.toLowerCase();

  const filteredTodos = items.filter((todo) =>
    todo.title.toLowerCase().includes(lowercasedQuery)
  );
  return filteredTodos;
});
