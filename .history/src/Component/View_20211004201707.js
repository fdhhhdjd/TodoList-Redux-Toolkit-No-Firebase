import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoList.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoInput from "./TodoInput";
import { Todo } from "./Todo";
import { clearStudent, getAllTodo, ViewTodo } from "../Redux/TodoSilce";
import { useParams } from "react-router";
const View = () => {
  const todos = useSelector(getAllTodo);
  const todo = todos;
  const dispatch = useDispatch();

  return (
    <div className="TodoList">
      <h1>Todo List With Redux 😍 No Firebase</h1>
      asdasd
      <ul>
        {todo &&
          todo.map((item) => {
            return <h1>{item.task} </h1>;
          })}
      </ul>
    </div>
  );
};

export default View;
