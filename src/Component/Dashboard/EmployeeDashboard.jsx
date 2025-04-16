import React from 'react'
import Header from "/src/Component/other/Header"
import TaskListNumbers from '/src/Component/other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 h-screen '>
      <Header changeUser={props.ChangeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
