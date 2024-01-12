import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";
import projectReducer from "./features/projectSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    project: projectReducer,
  },
});

export default store;
