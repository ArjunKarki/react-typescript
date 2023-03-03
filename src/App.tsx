import React, { useEffect, useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="header">taskify</span>
      <InputFields todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
