import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "./TodoSilce";
const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});

export default store;
