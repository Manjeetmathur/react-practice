import React from 'react'

const TaskNo = ({data}) => {
   // console.log(data);
   
  return (
    <div className='grid grid-cols  m-10 gap-5 md:flex'>
      <div className="h-40  bg-red-400 rounded-xl py-6 px-9">
         <h2 className='text-3xl font-bold'>{data.taskNumbers.active}</h2>
         <h3 className='text-2xl font-semibold'>Active Task</h3>
      </div>
      <div className="h-40  bg-blue-400 rounded-xl py-6 px-9">
         <h2 className='text-3xl font-bold'>{data.taskNumbers.completed}</h2>
         <h3 className='text-2xl font-semibold'>Completed Task</h3>
      </div>
      <div className="h-40  bg-green-400 rounded-xl py-6 px-9">
         <h2 className='text-3xl font-bold'>{data.taskNumbers.failed}</h2>
         <h3 className='text-2xl font-semibold'>Failed Task</h3>
      </div>
      <div className="h-40  bg-yellow-400 rounded-xl py-6 px-9">
         <h2 className='text-3xl font-bold'>{data.taskNumbers.newTask}</h2>
         <h3 className='text-2xl font-semibold'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskNo
 