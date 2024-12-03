import React from "react";

const ToDoList = () => {
  return (
    <div>
      <div className="flex gap-3 items-center justify-center w-screen p-5">
        <input
          className="focus:outline-none border border-black gap-3"
          type="text"
          placeholder="Add a task"
        />
        <button className="text-white bg-green-500 p-1">Add Task</button>
      </div>
      <div className="flex  items-center justify-center w-screen">
        <ul className="">
          <div className="flex gap-3 m-3">
            <li>this is first static task 1</li>
            <button className="text-white bg-red-500 p-1">delete</button>
          </div>

          <div className="flex gap-3 m-3 ">
            <li>this is secound static task 2</li>
            <button className="text-white bg-red-500 p-1">delete</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
