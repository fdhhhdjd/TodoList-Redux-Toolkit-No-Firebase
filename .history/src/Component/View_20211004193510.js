import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoList.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoInput from "./TodoInput";
import { Todo } from "./Todo";
const View = () => {
  const { todos } = dispatch((state) => state.todos);
  const todo = todos;
  return (
    <div className="TodoList">
      <h1>Todo List With Redux 😍 No Firebase</h1>
      <ToastContainer />
      <TodoInput />
      <ul>
        <TransitionGroup className="todo=list">
          {todo &&
            todo.map((item) => {
              return (
                <CSSTransition key={item.id} classNames="todo">
                  <Todo
                    key={item.id}
                    id={item.id}
                    task={item.task}
                    completed={item.completed}
                    updateTodo={update}
                  />
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default View;
