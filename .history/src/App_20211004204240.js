import "./grid.css";
import "./reset.css";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import TodoList from "./Component/TodoList";
function App() {
  return (
    <>
      <div className="App">
        <TodoList />
      </div>
    </>
  );
}

export default App;
