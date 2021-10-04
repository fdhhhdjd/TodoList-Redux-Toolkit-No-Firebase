import React from "react";
import { getShowTodo } from "../Redux/TodoSilce";

const View = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const todoItem = useSelector();
  useEffect(() => {
    dispatch(getShowTodo(params.id));
    return () => {
      dispatch(clearStudent());
    };
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
