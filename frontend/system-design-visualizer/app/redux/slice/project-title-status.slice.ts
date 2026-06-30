import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  title: string;
  status: string;
  designId: string | null;
}

const initialState: ProjectState = {
  title: "",
  status: "",
  designId: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },

    setDesignId: (state, action: PayloadAction<string>) => {
      state.designId = action.payload;
    },

    clearDesign: (state) => {
      state.designId = null;
      state.title = "";
      state.status = "";
    },
  },
});

export const { setTitle, setStatus, setDesignId, clearDesign } =
  projectSlice.actions;

export default projectSlice.reducer;
