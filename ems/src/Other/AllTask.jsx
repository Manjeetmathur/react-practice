import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllTask = () => {
  const context = useContext(AuthContext);
  console.log(context);

  return (
    <div className="bg-[#1c1c1c] rounded p-5 h-[250px]  ">
      <div className="bg-green-400 py-2 mb-2 flex justify-around rounded px-4">
        <h2 className="w1/5">Name</h2>
        <h3 className="w1/5">New Task </h3>
        <h5 className="w1/5">Active Task</h5>
        <h5 className="w1/5">completed</h5>
        <h5 className="w1/5">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto ">
      {context.employees.map(function (elem , idx) {
        return (
          
            <div key={idx} className="bg--400  py-2 mb-2 flex justify-around rounded px-4 border-2 border-emerald-500">
              <h2 className="w1/5 ">{elem.firstName}</h2>
              <h3 className="w1/5 text-green-300">{elem.taskNumbers.newTask}</h3>
              <h5 className="w1/5 text-red-500">{elem.taskNumbers.active}</h5>
              <h5 className="w1/5 text-blue-600  ">{elem.taskNumbers.completed}</h5>
              <h5 className="w1/5 text-yellow-200">{elem.taskNumbers.failed}</h5>
           
          </div>
        );
      })}
       </div>
    </div>
  );
};

export default AllTask;
