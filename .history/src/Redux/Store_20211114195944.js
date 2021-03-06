import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "./TodoSilce";
const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
