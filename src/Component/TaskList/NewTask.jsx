import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-80 bg-blue-300 rounded-md flex flex-col p-8'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 text-white font-semibold rounded-md px-3 py-2 '>{data.category}</h3>
        <h4 className='text-sm font-semibold text-white'>{data.date}</h4>
        </div>
        <div className='mt-10'>
            <h1 className='text-2xl font-semibold text-white'>{data.title}</h1>
            <p className='text-sm font-medium text-white mt-4'>{data.description}</p>
        </div>
        <div className='mt-4'>
          <button className='px-2 py-1 bg-blue-400 text-white rounded-md font-medium text-sm'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
