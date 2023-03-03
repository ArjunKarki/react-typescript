import React, { useEffect, useReducer, useRef, useState } from "react";
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
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    if (!isEdit) {
      setTodos((prev) =>
        prev.map((todo, i) =>
          todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
        )
      );
    }
  };

  const handleEdit = (id: number) => {
    setIsEdit(true);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    setTodos((prev) =>
      prev.map((item, i) =>
        item.id == todo.id ? { ...item, todo: editTodo } : item
      )
    );
    setIsEdit(false);
  };

  return (
    <form className="todo__single" onSubmit={(e) => handleSubmit(e)}>
      {isEdit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon">
          <AiOutlineCheck onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
