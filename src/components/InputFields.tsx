import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputFields = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter text here"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFields;
