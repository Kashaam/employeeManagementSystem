import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

//  const [userName, setUserName] = useState("")
//  if(!data){
//   setUserName('Admin')
//  }
//  else{
//   setUserName(data.firstName)
//  }

const logOutUser = ()=>{
     localStorage.setItem('loggedInUser', "")
     props.changeUser('');
    //  window.location.reload();
}

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl font-semibold'>Name</span>  </h1>
      <button onClick={logOutUser} className='bg-red-400 cursor-pointer text-white font-sm px-3 py-1 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
