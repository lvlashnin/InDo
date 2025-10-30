import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { Todo } from "@/types";
import { addTodo, updateTodo } from "@/features/todos/todosThunks";
import type { AppDispatch } from "@/app/store";

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Todo | null;
  mode: "add" | "edit";
}

export default function TodoModal({
  isOpen,
  onClose,
  initialData,
  mode,
}: TodoModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"todo" | "in-progress" | "done">("todo");

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description || "");
      setStatus(initialData.status as "todo" | "in-progress" | "done");
    } else {
      setTitle("");
      setDescription("");
      setStatus("todo");
    }
  }, [initialData, isOpen, mode]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todoData = { title, description, status };

    if (mode === "add") {
      dispatch(addTodo(todoData));
    } else if (mode === "edit" && initialData) {
      if (initialData._id) {
        dispatch(updateTodo({ ...todoData, _id: initialData._id }));
      }
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4">
          {mode === "edit" ? "Edit Todo" : "Add Todo"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none resize-none h-24"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "todo" | "in-progress" | "done")
            }
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              {mode === "edit" ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
