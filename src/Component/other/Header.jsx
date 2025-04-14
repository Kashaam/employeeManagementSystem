import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl font-semibold'>Kasham</span>  </h1>
      <button className='bg-red-400 cursor-pointer text-white font-sm px-3 py-1 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
