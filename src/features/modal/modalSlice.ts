import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  modal: boolean;
  animarModal: boolean;
}

const initialState: ModalState = {
  modal: false,
  animarModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.modal = action.payload;
    },
    animateModal: (state, action) => {
      state.animarModal = action.payload;
    },
  },
});

export const { toggleModal, animateModal } = modalSlice.actions;

export default modalSlice.reducer;
