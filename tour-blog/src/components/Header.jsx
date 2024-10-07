import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="bg-red-400 h-14 w-full p-4 flex justify-evenly">
              <div className="">
                     <img src="" alt="Man" />
              </div>
              <div className="">
                     <Link to={"/"}>
                            Home
                     </Link>
              </div>
              <div className="">
                     <Link to={"/"}>
                            Explore
                     </Link>
                     
              </div>
              <div className="">
                     <Link to={"/"}>
                            About
                     </Link>
                    
              </div>
      </div>
    </div>
  )
}

export default Header
