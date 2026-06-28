import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../slice/project-title-status.slice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
