import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";

function App() {
  const [taskList, setTastList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTastList={setTastList} />
      <TodoList taskList={taskList} setTastList={setTastList} />
    </div>
  );
}

export default App;
