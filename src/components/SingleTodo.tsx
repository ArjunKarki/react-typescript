import React from "react";
import { Todo } from "../model";

import { MdDelete } from "react-icons/md";
import { AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import "./styles.css";
type Props = {
  todos: Todo[];
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todos, todo, setTodos }: Props) {
  return (
    <form className="todo__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <MdDelete />
        </span>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
