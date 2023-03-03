import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todo">
      {todos.map((todo, i) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
