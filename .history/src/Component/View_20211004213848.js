import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getShowTodo, getTodo } from "../Redux/TodoSilce";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const View = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const todoItem = useSelector(getShowTodo);
  useEffect(() => {
    dispatch(getTodo(params.id));
  }, []);
  return (
    <>
      <div className="TodoList">
        <h1>Todo List With Redux 😍 No Firebase</h1>
        <ul>
          <TransitionGroup className="Todo">
            <CSSTransition key="normal" timeout={500} classNames="task-text">
              <li className="Todo-task">{todoItem.task}</li>
            </CSSTransition>
          </TransitionGroup>
          <div className="Todo-buttons">
            <Link exact to="/">
              <i class="fas fa-arrow-circle-left"></i>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default View;
