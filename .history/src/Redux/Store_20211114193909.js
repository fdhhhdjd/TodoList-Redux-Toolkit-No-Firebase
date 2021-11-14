import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "./TodoSilce";
const store = configureStore({
  reducer: {
    data: TodoReducer,
  },
});

export default store;
