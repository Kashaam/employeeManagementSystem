import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className='p-4  h-60 rounded'>

        <div className='flex px-3 py-2 justify-between items-center bg-red-300 rounded-md mt-3'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>Active Task</h3>
            <h3 className='w-1/5'>Completed Task</h3>
            <h3 className='w-1/5'>Failed Task</h3>
            <h3 className='w-1/5'>New Task</h3>
        </div>

       <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className='h-[80%] overflow-auto'>
       {userData.map((dta, id)=>{
            return  <div key={id} className='flex px-3 py-2 justify-between items-center bg-red-200 rounded-md mt-3 border-1 border-green-500'>
            <h2 className='w-1/5 text-lg font-semibold'>{dta.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-600'>{dta.taskStats.active}</h3>
            <h3 className='w-1/5 text-lg font-medium text-green-600'>{dta.taskStats.completed}</h3>
            <h3 className='w-1/5 text-lg font-medium text-red-600'>{dta.taskStats.failed}</h3>
            <h3 className='w-1/5 text-lg font-medium text-teal-600'>{dta.taskStats.newTask}</h3>
        </div>
        })}
       </div>
    </div>
  )
}

export default AllTask
