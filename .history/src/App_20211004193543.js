import "./grid.css";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from "./Component/TodoList";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/:id" component={TodoList} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
