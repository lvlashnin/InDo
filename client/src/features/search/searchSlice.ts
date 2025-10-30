import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { searchTodos } from "./searchThunks";
import { type Todo } from "@/types";

interface SearchState {
  query: string;
  results: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.query = "";
      state.results = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTodos.pending, (state, action) => {
        state.loading = true;
        state.query = action.meta.arg;
      })
      .addCase(
        searchTodos.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.loading = false;
          state.results = action.payload;
        }
      );
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
