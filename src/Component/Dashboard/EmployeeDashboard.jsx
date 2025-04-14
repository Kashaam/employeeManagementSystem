import React from 'react'
import Header from "/src/Component/other/Header"
import TaskListNumbers from '/src/Component/other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 h-screen '>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
