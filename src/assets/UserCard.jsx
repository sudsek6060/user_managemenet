/* eslint-disable react/prop-types */
// import React from 'react'
import '../index.css'

const UserCard = ({users, handleEdit, handleDelete}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid-container">
        {
            users.length > 0 ? (
                users.map((user) => (
                    <div className="card w-64 bg-blue-100 p-4 mb-4" key={user.id}>
                        <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
                        <p className="text-gray-600 mb-2">{user.email}</p>
                        <p className="text-gray-600 mb-2">{user.phoneNo}</p>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => handleEdit(user.id)}>
                                 Edit
                            </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={() => handleDelete(user.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <h1>No User Data</h1>
            )
        }
      </div>
    </div>
  )
}

export default UserCard