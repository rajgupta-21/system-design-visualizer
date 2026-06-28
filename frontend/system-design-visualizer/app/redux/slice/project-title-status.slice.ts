import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  title: string;
  status: string;
}

const initialState: ProjectState = {
  title: "Project Title",
  status: "Status",
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
  },
});

export const { setTitle, setStatus } = projectSlice.actions;

export default projectSlice.reducer;
