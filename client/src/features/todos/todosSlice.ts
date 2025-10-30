// src/features/todos/todosSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Todo } from "@/types";

import {
  fetchTodos,
  addTodo as addTodoThunk,
  updateTodo as updateTodoThunk,
  deleteTodo as deleteTodoThunk,
} from "./todosThunks";
interface TodosState {
  items: Todo[];
  loading: boolean;
}

const initialState: TodosState = {
  items: [],
  loading: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
      });
    builder.addCase(addTodoThunk.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(updateTodoThunk.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        (todo) => todo._id === action.payload._id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });
    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      state.items = state.items.filter((todo) => todo._id !== action.payload);
    });
  },
});

export const { setTodos, addTodo, setLoading } = todosSlice.actions;
export default todosSlice.reducer;
