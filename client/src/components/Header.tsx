import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";
import { type RootState } from "../app/store";
import { type Todo } from "../types";
import TodoModal from "./TodoModal";

export default function Header() {
  const dispatch = useDispatch();
  const { isOpen, mode, todoId } = useSelector(
    (state: RootState) => state.modal
  );
  const todos = useSelector((state: RootState) => state.todos.items);

  const handleOpenAddModal = () => {
    dispatch(openModal({ mode: "add" }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const todoToEdit: Todo | undefined =
    mode === "edit" && todoId ? todos.find((t) => t._id === todoId) : undefined;

  return (
    <header className="w-full bg-gray-900 text-white p-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold">InDo</div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        onClick={handleOpenAddModal}
      >
        + Add Todo
      </button>
      {isOpen && (
        <TodoModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          mode={mode as "add" | "edit"}
          initialData={todoToEdit}
        />
      )}
    </header>
  );
}
