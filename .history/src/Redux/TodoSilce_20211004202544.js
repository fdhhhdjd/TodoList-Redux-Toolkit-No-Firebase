import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      id: 1,
      task: "taiheo",
      completed: false,
    },
  ],
};
const movieSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };
      const addedTodo = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodo,
      };
    },
    removeTodo: (state, action) => {
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo,
      };
    },
    editTodo: (state, action) => {
      const update = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updateTask };
        }
        return todo;
      });
      return {
        ...state,
        todos: update,
      };
    },
    ViewTodo: (state, action) => {
        state.todos = state.todos.find((el) => el.id == action.payload);
      },
    },
    // clearStudent: (state) => {
    //   state.todos = [];
    // },
  },
  extraReducers: {},
});
const todoReducer = movieSlice.reducer;
export const { addTodo, removeTodo, editTodo, ViewTodo, clearStudent } =
  movieSlice.actions;
export const getAllTodo = (state) => state.todos.todos;
export default todoReducer;
