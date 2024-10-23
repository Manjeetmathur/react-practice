import React from 'react'
import Header from '../../Other/Header'
import TaskNo from '../../Other/TaskNo'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data);
  
  return (
    <div className='p-10 w-[90%] m-auto'>
       <Header changeUser = {props.changeUser} data={props.data}/>
       <TaskNo data={props.data}/>
       <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
