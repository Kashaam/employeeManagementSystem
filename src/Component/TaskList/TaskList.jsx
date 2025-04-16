import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className='h-[55%] w-full  mt-10 py-6 px-3 flex gap-2 flex-nowrap overflow-x-auto'>
     {data.tasks.map((elem, idm)=>{
      if(elem.active){
        return <AcceptTask key={idm} data={elem} />
      }
      if(elem.newTask){
        return <NewTask key={idm} data={elem} />
      }
      if(elem.completed){
        return <CompleteTask key={idm} data={elem} />
      }
      if(elem.failed){
        return <FailedTask key={idm} data={elem} />
      }
     })}
    </div>
  )
}

export default TaskList



