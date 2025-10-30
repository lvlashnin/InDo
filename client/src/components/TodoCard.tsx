import React from "react";
import { useDispatch } from "react-redux";
import { type DraggableProvided } from "@hello-pangea/dnd";
import { openModal } from "../features/modal/modalSlice";
import { deleteTodo } from "../features/todos/todosThunks";
import { type Todo } from "../types";
import type { AppDispatch } from "@/app/store";

interface TodoCardProps {
  todo: Todo;
  provided?: DraggableProvided;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, provided }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenEditModal = () => {
    dispatch(openModal({ mode: "edit", todoId: todo._id }));
  };
  const handleDelete = () => {
    if (todo._id) {
      dispatch(deleteTodo(todo._id));
    }
  };
  return (
    <div
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      className="bg-gray-800 text-white p-4 mt-4 rounded-2xl shadow-md flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{todo.title}</h3>
        <p className="text-gray-400 text-sm">{todo.description}</p>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleOpenEditModal}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1 mx-2 rounded-lg transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
