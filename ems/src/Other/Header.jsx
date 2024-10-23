import React, { useState } from 'react'

const Header = (props) => {
   

  // const [name , setName] = useState('')

  // if(!data){
  //   setName('User')
  // }
  // // else
  // // {
    
  // // }// window.location.reload()
  // console.log(name);
  
  const handleLogout = () => {
    localStorage.setItem("loggedInuser","")
    // console.log(props.changeUser);
    props.changeUser('')
    
  }
  
  return (
    <div className='flex justify-between  w-[90%] m-auto '>
      <h1 className='text-2xl'>Hello <br />firstName</h1>
      <button onClick={handleLogout} className='bg-red-700 px-2 rounded-xl'>LogOut</button>
    </div>
  )
}

export default Header
