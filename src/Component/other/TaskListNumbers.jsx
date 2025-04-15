import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='screen flex justify-between gap-4 mt-10'>
        <div className=' w-1/4 bg-red-300  px-9 py-8 rounded-lg'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.newTask}</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className=' w-1/4 bg-blue-300  px-9 py-8 rounded-lg'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed Task</h3>
        </div>
        <div className=' w-1/4 bg-teal-300  px-9 py-8 rounded-lg'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.active}</h2>
        <h3 className='text-2xl font-medium'>Accepted Task</h3>
        </div>
        <div className=' w-1/4 bg-zinc-300  px-9 py-8 rounded-lg'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
