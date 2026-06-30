import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  title: string;
  status: string;
  designId: string | null;
  userName: string | null;
}

const initialState: ProjectState = {
  title: "Title",
  status: "Status",
  designId: null,
  userName: "",
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
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    clearDesign: (state) => {
      state.designId = null;
      state.title = "";
      state.status = "";
      state.userName = "";
    },
  },
});

export const { setTitle, setStatus, setDesignId, setUserName, clearDesign } =
  projectSlice.actions;

export default projectSlice.reducer;
