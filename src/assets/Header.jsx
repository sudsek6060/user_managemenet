/* eslint-disable react/prop-types */
// import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <div>
        <h1 className="text-center text-5xl text-cyan-800 font-extrabold">
            User Management
          </h1>
          <div className="w-32 mx-auto mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mx-auto" 
              onClick={() => setIsAdding(true)}
            >
              Add User
            </button>
          </div>
    </div>
  )
}

export default Header