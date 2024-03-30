import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="addTodoContainer">

        {/* this is a form where we can take input from the user */}
        <form onSubmit={addTodoHandle} className="addTodo">
          <input
            type="text"
            placeholder="Enter Text ..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="button" class="btn btn-primary"><i class="ri-add-line"></i></button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
