import React from "react";
import { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsssignTo, setTaskAsssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskCategory,
      taskDate,
      taskDescription,
      taskTitle,
      active: true,
      newTask: false,
      completed: false,
      failed: false,
    });
    console.log(newTask);
    
    const data = JSON.parse(localStorage.getItem('employees'))
    data.forEach(function(elem){
      if(taskAsssignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = (elem.taskNumbers.newTask+1)
        console.log(elem);
      }
      localStorage.setItem('employees',JSON.stringify(data))
    })


    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setTaskAsssignTo('')
    setTaskCategory('')
  };

  return (
    <div className="p-12 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        action=""
        className="flex md:flex-row flex-col md:items-start md:justify-between"
      >
        <div className="md:w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="'text'"
            name=""
          />
          <div className="">
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                name=""
              />
            </div>
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                value={taskAsssignTo}
                onChange={(e) => setTaskAsssignTo(e.target.value)}
                type="text"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                placeholder="Employee name"
              />
            </div>
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={taskCategory}
                onChange={(e) => setTaskCategory(e.target.value)}
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design , dev, etc"
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 m-auto">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
