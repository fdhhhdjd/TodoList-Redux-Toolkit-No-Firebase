import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getShowTodo } from "../Redux/TodoSilce";

const View = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const todoItem = useSelector();
  useEffect(() => {
    dispatch(getShowTodo(params.id));
  }, []);
  return (
    <>
      <div>
        <h1>hello</h1>
      </div>
    </>
  );
};

export default View;
