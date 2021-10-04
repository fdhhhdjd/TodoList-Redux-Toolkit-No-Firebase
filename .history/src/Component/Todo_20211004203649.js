import React, { useState } from "react";
import "./Todo.css";
import { cssTransition, toast } from "react-toastify";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, ViewTodo } from "../Redux/TodoSilce";
import { Link } from "react-router-dom";
export const Todo = ({ todo, id, task, completed, toggleTodo, updateTodo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editStack, setEditStack] = useState(task);
  const handleUpload = (e) => {
    e.preventDefault();
    if (editStack === task) {
      return toast.info("moi ban nhap vao o input ");
    }
    updateTodo(id, editStack);
    toast.success("Bạn đã sữa thành công 😍");
    setEdit(false);
  };

  const removeItem = () => {
    if (window.confirm("Bạn thực sự muốn xóa 🤔")) {
      dispatch(removeTodo({ id }), toast.success("bạn đã xóa thành công 😒"));
    }
  };
  const ClickItem = () => {
    dispatch(ViewTodo(todo));
  };
  return (
    <>
      <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
        {edit ? (
          <CSSTransition key="editing" timeout={500} classNames="form">
            <form className="Todo-edit-form" onSubmit={handleUpload}>
              <input
                type="text"
                name="task"
                value={editStack}
                onChange={(e) => setEditStack(e.target.value)}
              />
              <button>Edit Save</button>
            </form>
          </CSSTransition>
        ) : (
          <CSSTransition key="normal" timeout={500} classNames="task-text">
            <li className="Todo-task" onClick={toggleTodo}>
              {task}
            </li>
          </CSSTransition>
        )}

        <div className="Todo-buttons">
          <button onClick={() => setEdit(true)}>
            <i className="fas fa-pen" />
          </button>
          {/* <button onClick={removeTodo}> */}
          <button onClick={removeItem}>
            <i className="fas fa-trash" />
          </button>
          <Link to={`/home/${id}`}>
            <i onClick={ClickItem} className="fas fa-eye"></i>
          </Link>
        </div>
      </TransitionGroup>
    </>
  );
};
