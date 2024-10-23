import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import Failedtask from "./Failedtask";

const TaskList = ({data}) => {
  // console.log(data);
  
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto w-full py-5  mt-10 flex md:flex-row flex-col items-center justify-start gap-10"
    >
      {
        data.tasks.map((elem,idx)=>{
          // console.log(elem.active);
          
          if(elem.active){
            return <AcceptTask data={elem} key={idx}/>
          }
          if(elem.newTask){
            return <NewTask data={elem} key={idx}/>
          }
          if(elem.failed){
            return <Failedtask data={elem} key={idx}/>
          }
          if(elem.completed){
            return <CompleteTask data={elem} key={idx}/>
          }
        })
      }
    </div>
  );
};

export default TaskList;
