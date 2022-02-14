import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/Nav";
import { useState, useEffect } from "react";
import { Todo } from "./Nav/Todo";
import { Covid } from "./Nav/Covid";
import {
  BrowserRouter as Router,
  Switch as Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [title, setTitle] = useState("");
  const [toDos, setToDos] = useState([
    { id: "todo1", title: "Play video game" },
    { id: "todo2", title: "Watching Tv" },
    { id: "todo3", title: "Reading book" },
  ]);

  const handleClick = (event) => {
    if (!title) {
      alert("empty");
    }
    let newToDo = { id: Math.floor(Math.random() * 1000), title: title };
    setToDos([...toDos, newToDo]);
  };
  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDeleteData = (id) => {
    let currentTodo = toDos;
    currentTodo = currentTodo.filter((item) => item.id !== id);

    setToDos(currentTodo);
  };
  useEffect(() => {});

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <div style={{ color: "black", margin: "20px" }}>
            Thông tin covid Việt Nam
          </div>

          {/* <input
          type="text"
          value={title}
          onChange={(event) => handleOnChange(event)}
        />
        <div>title: {title}</div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(event) => handleClick(event)}
        >
          Click me
        </button> */}
          <Switch>
            {/* <Route path="/about"><About /></Route> */}
            {/* <Route path="/users"><Users /></Route> */}
            <Route path="/">
              <Covid />
            </Route>
            <Route path="/Todo">
              <Todo toDos={toDos} handleDeleteData={handleDeleteData} />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
