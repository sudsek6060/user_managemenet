/* eslint-disable react/prop-types */
import  { useState } from 'react'
import Swal from 'sweetalert2';

const AddUser = ({ users, setUsers, setIsAdding }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const handleAdd = e => {
        e.preventDefault();
        if (!name || !email || !phoneNo) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = users.length + 1;
        const newUser = {
            id,
            name,
            email,
            phoneNo
        }
        users.push(newUser);
        setUsers(users);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg rounded-lg px-8 py-6">
                <h2 className="text-xl font-bold mb-4">Add User</h2>
                <form onSubmit={handleAdd}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Email:</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Phone No:</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" type="submit" >Add</button>
                        <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => setIsAdding(false)} >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddUser