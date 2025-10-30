import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import modalReducer from "../features/modal/modalSlice";
import searchReducer from "../features/search/searchSlice"; // Путь теперь правильный

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    modal: modalReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
