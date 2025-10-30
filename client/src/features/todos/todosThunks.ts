import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Todo } from "@/types";

type NewTodo = Omit<Todo, "_id" | "createdAt" | "updatedAt">;
type UpdateTodoPayload = {
  _id: string;
  title: string;
  description: string;
  status: string;
};

const API_URL = "https://indo-s082.onrender.com/api";
export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async () => {
    const res = await fetch(`${API_URL}/todos`);
    if (!res.ok) throw new Error("Failed to fetch todos");
    return await res.json();
  }
);

export const updateTodo = createAsyncThunk<Todo, UpdateTodoPayload>(
  "todos/updateTodo",
  async (updatedTodo) => {
    const { _id, ...data } = updatedTodo;
    const res = await fetch(`${API_URL}/todos/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to update todo");
    }
    return await res.json();
  }
);

export const addTodo = createAsyncThunk<Todo, NewTodo>(
  "todos/addTodo",
  async (newTodo) => {
    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error("Failed to add todo");
    }
    return await res.json();
  }
);

export const deleteTodo = createAsyncThunk<string, string>(
  "todos/deleteTodo",
  async (todoId) => {
    const res = await fetch(`${API_URL}/todos/${todoId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete todo");
    }

    return todoId;
  }
);
