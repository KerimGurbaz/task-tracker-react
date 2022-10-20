import React from "react";
import { useState } from "react";
import Tasks from "../Tasks/Tasks";

const Button = () => {
  const [show, setShow] = useState(false);

  const clickHandle = (e) => {
    setShow(!show);
    console.log(e);
  };
  return (
    <div>
      <button onClick={clickHandle} className="btn btn-danger">
        {show ? "Close Add Task Bar" : "Show Add Task Bar"}
      </button>

      {show ? <Tasks /> : <div> "No Task Show"</div>}
    </div>
  );
};

export default Button;
