import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { LuNotepadText } from "react-icons/lu";
import { todoList } from "./data";


const ToDoList = () => {
  const [tasks, setTasks] = useState(todoList);
  const [value, setValue] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Handle adding new tasks
  const handleClick = () => {
    if (value.trim() === "") return;
    setTasks([
      ...tasks,
      { id: tasks.length + 1, name: value, isStatus: "pending" },
    ]);

    setValue("");
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };


  const handleEditTask = (taskId, updatedName, updatedStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, name: updatedName, isStatus: updatedStatus }
          : task
      )
    );
  };
  

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="bg-white w-[50%] mx-auto rounded-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex m-3 items-center justify-center gap-2">
              <p className="font-bold">To Do List</p>
              <span className="text-lg">
                <LuNotepadText />
              </span>
            </div>

            {/* Pass props to TaskInput */}
            <TaskInput
              value={value}
              handleChange={handleChange}
              handleClick={handleClick}
            />

            {/* Pass tasks to TaskList */}
            <TaskList
              tasks={tasks}
              handleDelete={handleDelete}
              handleEditTask={handleEditTask}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
