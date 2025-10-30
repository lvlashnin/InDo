import { useDispatch } from "react-redux";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import { type Todo } from "@/types";
import TodoCard from "./TodoCard";
import { updateTodo } from "@/features/todos/todosThunks";
import { type AppDispatch } from "@/app/store";

interface TodosBoardProps {
  todos: Todo[];
}

export default function TodosBoard({ todos }: TodosBoardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const statuses: { key: "todo" | "in-progress" | "done"; label: string }[] = [
    { key: "todo", label: "Todo" },
    { key: "in-progress", label: "In Progress" },
    { key: "done", label: "Done" },
  ];

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const todo = todos.find((t) => t._id === draggableId);
    if (todo && todo._id && destination.droppableId) {
      dispatch(
        updateTodo({
          ...todo,
          _id: todo._id,
          status: destination.droppableId,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-4 items-start">
        {statuses.map((status) => (
          <Droppable key={status.key} droppableId={status.key}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-500 p-4 rounded-md flex flex-col min-h-[300px] max-h-[70vh] overflow-y-auto"
              >
                <h2 className="text-lg font-bold mb-2 top-0 bg-gray-500 z-10">
                  {status.label}
                </h2>
                {todos
                  .filter((todo) => todo.status === status.key)
                  .map((todo, index) => (
                    <Draggable
                      key={todo._id}
                      draggableId={todo._id!}
                      index={index}
                    >
                      {(provided) => (
                        <TodoCard todo={todo} provided={provided} />
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
