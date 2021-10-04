import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getShowTodo, getTodo } from "../Redux/TodoSilce";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const View = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const todoItem = useSelector(getShowTodo);
  useEffect(() => {
    dispatch(getTodo(params));
  }, []);
  return (
    <>
      <div className="TodoList">
        <h1>Todo List With Redux 😍 No Firebase</h1>

        <ul>
          <TransitionGroup className="todo=list">
            <CSSTransition key={todoItem.id} classNames="todo">
              <h1>{todoItem.task}</h1>
            </CSSTransition>
          </TransitionGroup>
        </ul>
      </div>
    </>
  );
};

export default View;
