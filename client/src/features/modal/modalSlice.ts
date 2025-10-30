import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ModalMode = "add" | "edit";

interface ModalState {
  isOpen: boolean;
  mode: ModalMode | null;
  todoId: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  mode: null,
  todoId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ mode: ModalMode; todoId?: string }>
    ) => {
      state.isOpen = true;
      state.mode = action.payload.mode;
      state.todoId = action.payload.todoId || null;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.mode = null;
      state.todoId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
