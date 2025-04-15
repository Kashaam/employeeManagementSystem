import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data.title)
  return (
    <div className='flex-shrink-0 h-full w-80 bg-teal-300 rounded-md flex flex-col p-8'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 text-white font-semibold rounded-md px-3 py-2 '>High</h3>
        <h4 className='text-sm font-semibold text-white'>20 Feb 2024</h4>
        </div>
        <div className='mt-10'>
            <h1 className='text-2xl font-semibold text-white'>{data.tasks.title}</h1>
            <p className='text-sm font-medium text-white mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id odit ut ducimus.</p>
        </div>
        <div className='flex justify-between mt-4'>
          <button className='px-2 py-1 bg-green-400 text-white rounded-md font-medium text-sm'>Mark as Completed</button>
          <button className='px-2 py-1 bg-red-400 text-white rounded-md font-medium text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
